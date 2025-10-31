//import TimerPageIMG from './TimerPage.jpg';
import { useEffect, useMemo, useRef, useState } from "react";
import "./TimerPage.css";
import { Link } from "react-router-dom";
import arrow2 from "./ArrowLeftWt.png";

function TimerPage() {
  const [minutes, setMinutes] = useState(45);
  const [remaining, setRemaining] = useState(45 * 60);
  const [running, setRunning] = useState(false);

  const rafRef = useRef(0);
  const lastTsRef = useRef(0);

  useEffect(() => {
    if (!running) setRemaining(minutes * 60);
  }, [minutes, running]);

  useEffect(() => {
    if (!running) return;
    const tick = (ts) => {
      if (!lastTsRef.current) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      setRemaining((prev) => {
        const next = Math.max(0, prev - dt);
        if (next === 0) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = 0;
          lastTsRef.current = 0;
          setRunning(false);
        }
        return next;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
      lastTsRef.current = 0;
    };
  }, [running]);

  const size = 260;
  const stroke = 22;
  const r = (size - stroke) / 2;
  const C = 2 * Math.PI * r;

  const total = Math.max(1, minutes * 60);
  const progress = Math.min(1, Math.max(0, 1 - remaining / total)); // 0..1
  const dash = progress * C;

  const mm = Math.floor(remaining / 60);
  const ss = Math.floor(remaining % 60);
  const timeStr = `${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;

  const startPause = () => setRunning((v) => !v);
  const reset = () => {
    setRunning(false);
    setRemaining(minutes * 60);
  };

  return (
    <div className="PhoneFrameTP">
      <div className="TimerPage">
        <Link to="/" className="BackBtn2" aria-label="Go Home">
          <img src={arrow2} alt="Back" />
        </Link>

        <h1 className="PageTitleTP">Focus Session</h1>

        <div className="TimerCard">
          <div className="RingWrap">
            <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
              <defs>
                <linearGradient id="timerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ea6a41" />
                  <stop offset="100%" stopColor="#6b8f6e" />
                </linearGradient>
              </defs>

              <circle
                cx={size / 2}
                cy={size / 2}
                r={r}
                stroke="rgba(0,0,0,0.45)"
                strokeWidth={stroke}
                fill="none"
              />

              <circle
                cx={size / 2}
                cy={size / 2}
                r={r}
                stroke="url(#timerGrad)"
                strokeWidth={stroke}
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${dash} ${C}`}
                strokeDashoffset="0"
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
              />
            </svg>

            <div className="RingCenter">
              <div className="RingTime">{timeStr}</div>
              <div className="RingBtns">
                <button className="Btn BtnPrimary" onClick={startPause}>
                  {running ? "Pause" : "Start"}
                </button>
                <button className="Btn" onClick={reset}>Reset</button>
              </div>
            </div>
          </div>

          <div className="TimerControls">
            <div className="SliderRow">
              <input
                type="range"
                min={1}
                max={90}
                step={1}
                value={minutes}
                onChange={(e) => setMinutes(parseInt(e.target.value, 10))}
                className="TimerRange TimerRange--duration"
              />
              <div className="SliderLabel">
                <span>Duration</span>
                <strong>{minutes} min</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimerPage;