import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import LightControl from './LightControl';
import TimerPage from './TimerPage';
import PanelControl from './PanelControl';
import Settings from './Settings';

function App() {
  return (
  <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/lightControl" element={<LightControl />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/TimerPage" element={<TimerPage />} />
        <Route path="/PanelControl" element={<PanelControl />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
