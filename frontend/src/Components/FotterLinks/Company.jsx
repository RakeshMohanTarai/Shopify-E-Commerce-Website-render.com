import React from 'react';

const Company = () => {
  return (
    <div style={{ 
      padding: '20px', 
      borderRadius: '8px', 
      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
      background: 'linear-gradient(to right, #ff9a9e, #fad0c4, #a1c4fd)', /* Gradient color */
      }}>
      <h1 style={{ color: '#fff', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>Welcome to Shopify</h1>
      <p style={{ fontSize: '16px', lineHeight: '1.6', marginTop: '20px', color: '#fff' }}>
        Shopify is a leading online platform that offers a wide range of fashionable clothing for men, women, and kids. With a focus on quality and style, we bring you the latest trends from around the world.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
        <div style={{ flex: '1', marginRight: '20px' }}>
          <h2 style={{ color: '#fff', marginBottom: '10px' }}>Our Mission</h2>
          <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#fff' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, tellus vitae tempus fringilla, justo tellus tincidunt tortor, ac faucibus libero odio sed felis. Nulla facilisi.
          </p>
        </div>
        <div style={{ flex: '1', marginLeft: '20px' }}>
          <h2 style={{ color: '#fff', marginBottom: '10px' }}>Our Vision</h2>
          <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#fff' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, tellus vitae tempus fringilla, justo tellus tincidunt tortor, ac faucibus libero odio sed felis. Nulla facilisi.
          </p>
        </div>
      </div>
      <hr style={{ border: 'none', borderTop: '1px solid #ddd', marginTop: '30px', marginBottom: '30px' }} />
      <div style={{ color: '#fff' }}>
        <h2 style={{ marginBottom: '10px' }}>Why Choose Shopify?</h2>
        <ul style={{ fontSize: '14px', lineHeight: '1.5' }}>
          <li>Wide range of trendy clothing options</li>
          <li>High-quality products at affordable prices</li>
          <li>Fast and reliable shipping</li>
          <li>24/7 customer support</li>
          <li>Easy returns and exchanges</li>
          <li>Secure payment options</li>
          <li>Regular discounts and promotions</li>
        </ul>
      </div>
    </div>
  );
}

export default Company;
