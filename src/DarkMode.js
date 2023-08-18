import React from 'react';
import './DarkMode.css'


function DarkMode({ toggleDarkMode }) {
//   const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className='Dark'>
      <span>Dark Mode Component</span>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      {/* <p>Dark Mode: {isDarkMode ? 'On' : 'Off'}</p> */}
    </div>
  );
}

export default DarkMode;
