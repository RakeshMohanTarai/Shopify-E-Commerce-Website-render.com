import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
// import instagram_icon from '../Assests/instagram_icon.png';
// import whatsapp_icon from '../Assests/whatsapp_icon.png';
// import pintester_icon from '../Assests/pintester_icon.png';
// import footer_logo from '../Assests/logo_big.png';

const Footer = () => {
  const handleShopperClick = () => {
    // Scroll to the top of the page when "SHOPPER" is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='footer'>
      <div className="footer-logo" onClick={handleShopperClick}  title="Click to scroll to the top">
        <img src='https://cdn-icons-png.flaticon.com/128/14274/14274802.png' alt="Logo" />
        <p className="shopify-text">SHOPIFY</p>
      </div>
      <ul className="footer-links">
       <Link to='/company' style={{textDecoration: 'none'}}> <li>Company</li> </Link>
       <Link to='/products' style={{textDecoration: 'none'}}> <li>Products</li> </Link>
       <Link to='/offices' style={{textDecoration: 'none'}}> <li>Offices</li> </Link>
       <Link to='/about' style={{textDecoration: 'none'}}> <li>About</li> </Link>
       <Link to='/contact' style={{textDecoration: 'none'}}> <li>Contact</li> </Link>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
       <Link to='https://www.facebook.com/rakesh.mohan.9638718/'> <img src='https://cdn-icons-png.flaticon.com/128/747/747543.png' alt="facebook" /> </Link>
        </div>
        <div className="footer-icons-container">
       <Link to='https://www.instagram.com/rakesh_mohan1999/'> <img src='https://cdn-icons-png.flaticon.com/128/1384/1384172.png' alt="Instagram" /> </Link> 
        </div>
        <div className="footer-icons-container">
         <Link to='https://twitter.com/RakeshMohan1999'> <img src='https://cdn-icons-png.flaticon.com/128/1384/1384075.png' alt="WhatsApp" /> </Link>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright © 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
