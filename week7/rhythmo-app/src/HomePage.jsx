// import logo from './HomePage.jpg';
import './HomePage.css';
import NavBar from "./NavBar";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DataDisplay from "./DataDisplay.png";

function HomePage() {
  const [pomodoroOn, setPomodoroOn] = useState(true);
  const [panelOn, setPanelOn] = useState(false);

  return (
    <div className="PhoneFrameHP">
      <div className="HomePage">
        <h1 className="HPTitle">Hi, Rachel!</h1>

        
        <div className="Data">
          <img src={DataDisplay} alt="data" className="DataDisplay" />
        </div>
        
        <h2 className="Preferences">Preferences</h2>

        
        <div className="SettingCard" style={{ background: '#E4D0BE' }}>
          <Link to="/TimerPage">
          <div className="IconBox" style={{ background: '#B3774E' }} />
          </Link>
          <div className="SettingText">
            <div className="SettingTitle">Pomodoro Mode</div>
            <div className="SettingSubtitle">45 MIN per session</div>
          </div>
          <button
            className={`Switch PomodoroSwitch ${pomodoroOn ? 'on' : ''}`}
            onClick={() => setPomodoroOn(!pomodoroOn)}
            type="button"
            aria-pressed={pomodoroOn}
            aria-label="Toggle Pomodoro Mode"
          >
            <span className="Knob" />
          </button>
        </div>

        
        <div className="SettingCard" style={{ background: '#BCCDBF' }}>
          <Link to="/PanelControl">
          <div className="IconBox" style={{ background: '#788E83' }} />
          </Link>
          <div className="SettingText">
            <div className="SettingTitle">Panel Control</div>
            <div className="SettingSubtitle">Do Not Disturb</div>
          </div>
          <button
            className={`Switch PanelSwitch ${panelOn ? 'on' : ''}`}
            onClick={() => setPanelOn(!panelOn)}
            type="button"
            aria-pressed={panelOn}
            aria-label="Toggle Panel Control"
          >
            <span className="Knob" />
          </button>
        </div>
        <NavBar />
      </div>
    </div>
  );
}

export default HomePage;
