//import logo from './LightControl.jpg';
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import "./LightControl.css";
import arrow from "./ArrowLeftBlk.png";
import LightPanel from "./LightPanel.png";

function LightControl() {
  
  const [hue, setHue] = useState(35);
  const [brightness, setBrightness] = useState(65);

  const alpha = useMemo(() => Math.max(0, Math.min(1, brightness / 100)), [brightness]);
  // linear-gradient(90deg, #f4a338, #ffffff 50%, #88c5ff)
 const color = useMemo(() => {
  const v = Math.max(0, Math.min(360, hue)); // safety clamp
  // ---------- 0 → 180 : orange → white ----------
  if (v <= 180) {
  const t = v / 180; // 0 → 1
  const sat = (1 - t) * 100; // 100% → 0%
  const light = 65 + t * 35; // 65% → 100%
  return `hsla(35, ${sat.toFixed(1)}%, ${light.toFixed(1)}%, ${alpha})`;
  }
  // ---------- 180 → 360 : white → blue ----------
  const t = (v - 180) / 180; // 0 → 1
  const sat = t * 100; // 0% → 100%
  const light = 100 - t * 35; // 100% → 65%
  return `hsla(210, ${sat.toFixed(1)}%, ${light.toFixed(1)}%, ${alpha})`;
  }, [hue, alpha]);
  // const color = useMemo(() => `hsla(${hue}, 100%, 50%, ${alpha})`, [hue, alpha]);

  return (
    <div className="PhoneFrameLC">
      <div className="LightControl">
       

        <div className="InnerFrame">
          <h1 className="PageTitle">Light</h1>

          <img src={LightPanel} alt="light" className="LightPanel" />
          <div className="LightPreview">

            <div
              className="LightGlow"
              style={{
                background: color,
                filter: `blur(${Math.max(12, 36 * alpha)}px) saturate(130%)`,
                mixBlendMode: "screen",
              }}
            />
          </div>

      
        </div>

        <NavBar />
        <div className="ControlsStack">
            
            <div className="SliderRow">
              <input
                type="range"
                min={0}
                max={360}
                step={1}
                value={hue}
                onChange={(e) => setHue(parseInt(e.target.value, 10))}
                className="Range Range--color"
                aria-label="Color"
              />
              <div className="SliderLabel">Color</div>
            </div>

            
            <div className="SliderRow">
              <input
                type="range"
                min={0}
                max={100}
                step={1}
                value={brightness}
                onChange={(e) => setBrightness(parseInt(e.target.value, 10))}
                className="Range Range--brightness"
                aria-label="Brightness"
              />
              <div className="SliderLabel">Brightness</div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default LightControl;