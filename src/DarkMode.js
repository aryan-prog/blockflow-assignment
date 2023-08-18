import React from 'react';
import lr from './assets/rect-dark-right.png'
import ll from './assets/rect-dark-left.png'
import lightlogo from './assets/light-logo.png'
import hexagon from './assets/hexagon.svg'
import './LightMode.css'
import sun from './assets/sun.png'
import './DarkMode.css'


function DarkMode({ toggleDarkMode }) {
//   const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className='Dark'>
    <nav className='navbar'>
     <div className='blockflow-heading-dark'>
       <img src={lightlogo} alt='logo'></img>
       <span>blockflow</span> 
     </div>
     <div className='details-section-dark'>
         <h3>DOCS</h3>
         <h3>BLOG</h3>
         <h3>PRICING</h3>
         <h3>CONTACT US</h3>
     </div>
     <img src={sun} alt='switch modes' onClick={toggleDarkMode} id='sun'></img>
   </nav>
   <div className='middle-body'>
     <div  className='banner-text'>
     <div className='banner-dark'>Elevate your dapp development with blockflow</div>
     <div className='sub-dark'>Efficient API Creation for Your Blockchain Data Needs.</div>
     </div>
     <div className='design-images'>
       <img id='hex1'src={hexagon} alt='diamond'></img>
       <img id='dark1'src={ll} alt='diamond'></img>
       <img id='dark2'src={lr} alt='diamond'></img>
       <img id='hex2'src={hexagon} alt='diamond'></img>
     </div>
   </div>
   <button className='request-demo-dark'>Request Demo</button>
 </div>
  );
}

export default DarkMode;
