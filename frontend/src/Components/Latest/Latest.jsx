import React from 'react';
import latest_banner from '../Assests/Latest Products/Latest Banner.jpg';
import './Latest.css'; // Assuming you saved the CSS in a file named Latest.css

const Latest = () => {
  return (
    <div className='latestproduct-banner'>
      <img src={latest_banner} alt="" />
    </div>
  );
}

export default Latest;
