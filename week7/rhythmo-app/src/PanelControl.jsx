//import PanelControlIMG from './PanelControl.jpg';
import { useState } from "react";
import { Link } from "react-router-dom";
import PanelShowCase from "./PanelShowCase.png";
import arrow2 from "./ArrowLeftWt.png";
import "./PanelControl.css";

function PanelControl() {
 
  const [selected, setSelected] = useState({
    Time: false,
    Reminders: false,
    "Session Countdown": false,
  });

  const options = ["Time", "Reminders", "Session Countdown"];


  const toggleOption = (opt) => {
    setSelected((prev) => ({ ...prev, [opt]: !prev[opt] }));
  };

  return (
    <div className="PhoneFramePC">
      <div className="PanelControl">
        <Link to="/" className="BackBtn2" aria-label="Go Home">
          <img src={arrow2} alt="Back" />
        </Link>

        <h1 className="PageTitlePC">Panel Customization</h1>

        <img src={PanelShowCase} alt="PanelControl" className="PanelShowCase" />

        <div className="ControlFrame">
          <h2 className="FunctionTitle">Functions</h2>
          <ul className="FunctionList">
            {options.map((opt) => (
              <li key={opt}>
                <label className="FunctionOption">
                  <input
                    type="checkbox" 
                    checked={selected[opt]}
                    onChange={() => toggleOption(opt)}
                  />
                  <span className="CustomRadio"></span>
                  <span className="OptionLabel">{opt}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PanelControl;
