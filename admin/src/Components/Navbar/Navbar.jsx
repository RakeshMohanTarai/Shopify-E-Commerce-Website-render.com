import React from 'react';
import './Navbar.css';
import navlogo from '../../assets/nav-logo.png';
import navProfile from '../../assets/nav-profile.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
   <Link to='https://main--lively-concha-5b6171.netlify.app/'> <img src={navlogo} alt="navbar_logo" className="nav-logo" /> </Link>
      <img
        src={navProfile}
        alt="profile_image"
        className='nav-profile'
      />
    </div>
  );
};

export default Navbar;
