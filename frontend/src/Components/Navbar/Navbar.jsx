import React, { useState, useEffect, useContext, useRef } from 'react';
import './Navbar.css';
import cart_icon from '../Assests/cart_icon.png';
import { Link, useLocation } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {
  // Get the current location using the useLocation hook from react-router-dom
  const location = useLocation();

  // Load Menu State from localStorage when the Component Starts:
  // If there's nothing stored in localStorage for the 'menu' key, default to 'shop'.
  const initialMenu = localStorage.getItem('menu') || 'shop';

  // Set the initial state of the menu using the value stored in localStorage
  const [menu, setMenu] = useState(initialMenu);
  const { getTotalCartItems } = useContext(ShopContext);

  // Function for navbar hide button (media query)
  const menuRef = useRef();

  // State to manage the animation
  const [isAnimationActive, setIsAnimationActive] = useState(true);

  const dropdown_toggle = (e) => {
    // Toggle the visibility of the dropdown menu
    menuRef.current.classList.toggle('nav-menu-visible');

    // Toggle the 'open' class on the dropdown button for appearance change
    e.target.classList.toggle('open');

    // Toggle the animation state
    setIsAnimationActive(!isAnimationActive);
  }

  // Clear menu state in localStorage when the component mounts
  useEffect(() => {
    localStorage.removeItem('menu');
  }, []);

  // Reset menu state to the default value when the component mounts or initialMenu changes
  useEffect(() => {
    setMenu(initialMenu);
  }, [initialMenu]);

  // Update localStorage Whenever the Menu State Changes:
  // Watch for changes in the 'menu' state and update localStorage accordingly
  useEffect(() => {
    localStorage.setItem('menu', menu);
  }, [menu]);

  // Check if the current location is different from the stored menu
  useEffect(() => {
    // Extract the path without the leading slash
    const pathWithoutSlash = location.pathname.replace('/', '');
    // Update the menu state if the pathWithoutSlash is different from the stored menu
    if (pathWithoutSlash !== menu) {
      setMenu(pathWithoutSlash);
    }
  }, [location.pathname, menu]);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        {/* Logo and brand name */}
        <img src='https://cdn-icons-png.flaticon.com/128/14274/14274802.png' alt='logo-img' className='logo-img' />
        <Link to='/' style={{ textDecoration: 'none' }}><p className='shopper-paragraph'>SHOPIFY</p></Link>
      </div>
      <h4> Menu </h4>
      <img
        className={`nav-dropdown ${isAnimationActive ? 'pulse-animation' : ''}`}
        onClick={dropdown_toggle}
        src="https://cdn-icons-png.flaticon.com/128/9347/9347217.png"
        alt=""
      />
      <ul ref={menuRef} className='nav-menu'>
        {/* Shop section */}
        <li>
          <Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>
          {menu === 'shop' || location.pathname === '/' ? <div className='hr-element'></div> : null}
        </li>
        {/* Men section */}
        <li>
          <Link to='/men' style={{ textDecoration: 'none' }}>Men</Link>
          {menu === 'men' ? <div className='hr-element'></div> : null}
        </li>
        {/* Women section */}
        <li>
          <Link to='/women' style={{ textDecoration: 'none' }}>Women</Link>
          {menu === 'women' ? <div className='hr-element'></div> : null}
        </li>
        {/* Kids section */}
        <li>
          <Link to='/kid' style={{ textDecoration: 'none' }}>Kids</Link>
          {menu === 'kid' ? <div className='hr-element'></div> : null}
        </li>
      </ul>
      <div className='nav-login-cart'>
        {localStorage.getItem('auth-token')
          ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/login') }}>Logout</button>
          : <Link to='/login' style={{ textDecoration: 'none' }}><button>Login</button></Link>
        }
        {/* Cart icon */}
        <Link to='/cart'><img src={cart_icon} alt='cart-icon' className='cart-icon' /></Link>
      </div>
      {/* Cart count */}
      <div className="nav-cart-count">{getTotalCartItems()}</div>
    </div>
  );
};
