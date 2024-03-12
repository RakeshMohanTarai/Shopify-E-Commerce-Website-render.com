import React from 'react';
import check_banner from '../Assests/Check Now Banner.jpg';
import './Check.css'; // Assuming you saved the CSS in a file named Latest.css

const Latest = () => {
  return (
    <div className='checkproduct-banner'>
      <img src={check_banner} alt="check-banner" />
    </div>
  );
}

export default Latest;
