import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import homeIcon from './Home.png';
import filterIcon from './Filter.png';
import settingIcon from './Setting.png';

function NavBar() {
  const location = useLocation();
  const current = location.pathname;

  return (
    <nav className="NavBar">
      <Link
        to="/"
        className={`NavItem ${current === "/" ? "active" : ""}`}
      >
        <img src={homeIcon} alt="Home" />
      </Link>

      <Link
        to="/lightcontrol"
        className={`NavItem ${
          current === "/lightcontrol" ? "active" : ""
        }`}
      >
        <img src={filterIcon} alt="LightControl" />
      </Link>

      <Link
        to="/settings"
        className={`NavItem ${
          current === "/settings" ? "active" : ""
        }`}
      >
        <img src={settingIcon} alt="Settings" />
      </Link>
    </nav>
  );
}

export default NavBar;