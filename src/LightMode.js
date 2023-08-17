import React from 'react';
import useDarkMode from './useDarkMode';
import './LightMode.css'


function LightMode({ toggleDarkMode }) {
//   const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className='Light'>
      <span>Light Mode Component</span>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      {/* <p>Dark Mode: {isDarkMode ? 'On' : 'Off'}</p> */}
    </div>
  );
}

export default LightMode;
