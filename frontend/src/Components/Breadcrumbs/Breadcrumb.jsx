import React from 'react';
import './Breadcrumb.css';
import { Link } from 'react-router-dom';
// import  arrow_icon from '../Assests/breadcrum_arrow.png';

const Breadcrumb = (props) => {
  if (!props.product) {
    return null; // or handle the case where product is not available
  }

  return (
    <div className='breadcrumb'>
      <Link to='/'><span>HOME</span></Link>
      <img src='https://cdn-icons-png.flaticon.com/128/556/556690.png' alt="arrow-icon" />
      <Link to='/'><span>SHOP</span></Link>
      <img src='https://cdn-icons-png.flaticon.com/128/556/556690.png' alt="" />
      <Link to={`/${props.product.category.toLowerCase()}`}>
        <span>{props.product.category}</span>
      </Link>
      <img src='https://cdn-icons-png.flaticon.com/128/556/556690.png' alt="" />
      <span>{props.product.name}</span>
    </div>
  );
}

export default Breadcrumb;
