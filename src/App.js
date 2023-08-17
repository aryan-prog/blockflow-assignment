import './App.css';
import DarkMode from './DarkMode';
import LightMode from './LightMode';
import rectLight from './assets/rect-light-right.png'
import useDarkMode from './useDarkMode';


function App() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const color='Light';
  return (
    <div className="App">
      {/* <LightMode/> */}
      {isDarkMode ? <DarkMode toggleDarkMode={toggleDarkMode} /> : <LightMode toggleDarkMode={toggleDarkMode} />} 
      {/* <nav className='navbar'>
        <div className='blockflow-heading'>
          <img src={rectLight} alt='light'></img>
          <img src={rectLight} alt='light'></img>
        </div>
      </nav> */}
    </div>
  );
}

export default App;
