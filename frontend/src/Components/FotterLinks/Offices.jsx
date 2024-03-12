import React from 'react';

const Offices = () => {
  return (
    <div style={{ 
      padding: '20px', 
      borderRadius: '8px', 
      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
      background: 'linear-gradient(to right, #a6c0fe, #f68084)', /* Gradient color */
      }}>
      <h1 style={{ color: '#fff', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>Our Offices</h1>
      <div style={{ marginTop: '30px', color: '#fff' }}>
        <h2>Headquarters</h2>
        <p>
          Our headquarters is located in the heart of Silicon Valley, California. It's where our executive team, product development, and marketing teams work together to drive innovation and growth.
        </p>
        <p>
          Address: 123 Tech Avenue, Silicon Valley, CA 12345
        </p>
        <p>
          Phone: +1 (123) 456-7890
        </p>
        <p>
          Email: headquarters@shopify.com
        </p>
      </div>
      <hr style={{ border: 'none', borderTop: '1px solid #ddd', marginTop: '30px', marginBottom: '30px' }} />
      <div style={{ color: '#fff' }}>
        <h2>Regional Offices</h2>
        <p>
          In addition to our headquarters, we have regional offices strategically located around the world to better serve our customers. Our regional offices handle sales, customer support, and operations.
        </p>
        <h3>New York</h3>
        <p>
          Address: 456 Broadway, New York, NY 10001
        </p>
        <p>
          Phone: +1 (123) 456-7891
        </p>
        <p>
          Email: newyork@shopify.com
        </p>
        <h3>London</h3>
        <p>
          Address: 789 Oxford Street, London, UK SW1A 1AA
        </p>
        <p>
          Phone: +44 20 1234 5678
        </p>
        <p>
          Email: london@shopify.com
        </p>
      </div>
    </div>
  );
}

export default Offices;
