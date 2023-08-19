import './App.css';
import DarkMode from './DarkMode';
import LightMode from './LightMode';
import useDarkMode from './useDarkMode';


function App() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    <div className="App">
      {isDarkMode ? <DarkMode toggleDarkMode={toggleDarkMode} /> : <LightMode toggleDarkMode={toggleDarkMode} />} 
    </div>
  );
}

export default App;
