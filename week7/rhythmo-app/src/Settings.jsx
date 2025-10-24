import logo from './Settings.jpg';
import {Link} from 'react-router-dom';
function Settings() {
  return (
    <div className="Settings">
    	<li><Link to ="/">Homepage</Link></li>
        <img src={logo} alt="logo" />
    </div>
  );
}

export default Settings;
