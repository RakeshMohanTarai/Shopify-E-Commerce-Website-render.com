import React from 'react';
import './Hero.css';
import arrowIcon from '../Assests/arrow.png';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>DAILY STYLE REFRESH!</h2>
        <div>
          <div className='hero-hand-icon'>
            <p>TOP</p>
            <img src='https://cdn-icons-png.flaticon.com/128/10785/10785604.png' alt='hand-icon' />
          </div>
          <p className='hero-hand-text'>Picks</p>
          <p>For Everyone</p>
        </div>
        <Link to='/latest' style={{ textDecoration: 'none' }}>
          <div className='hero-latest-btn'>
            <div style={{ color: 'white' }}>Latest Collection</div>
            <img src={arrowIcon} alt='arrow-icon' />
          </div>
        </Link>
      </div>
    </div>
  );
};
