import logo from './LightControl.jpg';
import {Link} from 'react-router-dom';
function LightControl() {
  return (
    <div className="LightControl">
    	<li><Link to ="/">Homepage</Link></li>
        <img src={logo} alt="logo" />
    </div>
  );
}

export default LightControl;
