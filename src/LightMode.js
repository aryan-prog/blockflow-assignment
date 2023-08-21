import React from 'react';
import lr from './assets/rect-dark-right.png'
import ll from './assets/rect-dark-left.png'
import darklogo from './assets/dark-logo.png'
import hexagon from './assets/hexagon.svg'
import './LightMode.css'
import moon from './assets/moon.png'


function LightMode({ toggleDarkMode }) {

  return (
    <div className='Light'>
       <nav className='navbar'>
        <div className='blockflow-heading'>
          <img src={darklogo} alt='logo'></img>
          <span>blockflow</span> 
        </div>
        <div className='details-section'>
            <h3>DOCS</h3>
            <h3>BLOG</h3>
            <h3>PRICING</h3>
            <h3>CONTACT US</h3>
        </div>
        <img src={moon} alt='switch modes' onClick={toggleDarkMode} id='moon'></img>
      </nav>
      <div className='middle-body'>
        <div  className='banner-text'>
        <div className='banner'>Elevate your dapp development with blockflow</div>
        <div className='sub'>Efficient API Creation for Your Blockchain Data Needs.</div>
        </div>
        <div className='design-images'>
          <img id='hex1'src={hexagon} alt='diamond'></img>
          <img id='dark1'src={ll} alt='diamond'></img>
          <img id='dark2'src={lr} alt='diamond'></img>
          <img id='hex2'src={hexagon} alt='diamond'></img>
        </div>
      </div>
      <button className='request-demo'>Request Demo</button>
      <div className='animation-sun'></div>
    </div>
  );
}

export default LightMode;
