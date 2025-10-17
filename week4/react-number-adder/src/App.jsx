import './App.css';
import Header from './Header';
import ResultBar from './ResultBar';
import ControlCenter from './ControlCenter';


function App() {
  return (
    <div className="App">
      <Header />
      <div id="main-content" className="bolded">
        <ResultBar />
        <ControlCenter />
      </div>
      


    </div>
  );
}

export default App;
