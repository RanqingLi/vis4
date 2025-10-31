// import logo from './Settings.jpg';
import './Settings.css';
import NavBar from "./NavBar";
import arrow2 from './ArrowLeftWt.png';
import { Link } from 'react-router-dom';

function Settings() {
  return (
    <div className="PhoneFrameST">
      <div className="Settings">
{/*        <Link to="/" className="BackBtn2" aria-label="Go Home">
          <img src={arrow2} alt="Back" />
        </Link>*/}
        <h1 className="PageTitleST">Settings</h1>
        <div className="LowerFrame">
        </div>
        <NavBar />
      </div>
    </div>
  );
}

export default Settings;