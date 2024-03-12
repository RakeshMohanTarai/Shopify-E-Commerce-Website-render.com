import React from 'react';

const Products = () => {
  return (
    <div style={{ 
      padding: '20px', 
      borderRadius: '8px', 
      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
      background: 'linear-gradient(to right, #ffdde1, #ee9ca7)', /* Gradient color */
      }}>
      <h1 style={{ color: '#fff', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>Explore Our Collections</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
        <div style={{ flex: '1', marginRight: '20px', color: '#fff' }}>
          <h2 style={{ marginBottom: '10px' }}>Men's Collection</h2>
          <p style={{ fontSize: '14px', lineHeight: '1.5' }}>
            Discover the latest trends in men's fashion. From casual wear to formal attire, find your perfect look.
          </p>
          <ul style={{ fontSize: '14px', lineHeight: '1.5' }}>
            <li>Trendy Shirts</li>
            <li>Stylish Jackets</li>
            <li>Comfortable Jeans</li>
            <li>Sportswear</li>
          </ul>
        </div>
        <div style={{ flex: '1', marginLeft: '20px', color: '#fff' }}>
          <h2 style={{ marginBottom: '10px' }}>Women's Collection</h2>
          <p style={{ fontSize: '14px', lineHeight: '1.5' }}>
            Explore the latest in women's fashion. Find elegant dresses, trendy tops, and chic accessories.
          </p>
          <ul style={{ fontSize: '14px', lineHeight: '1.5' }}>
            <li>Stunning Dresses</li>
            <li>Trendy Tops</li>
            <li>Beautiful Accessories</li>
            <li>Comfortable Bottoms</li>
          </ul>
        </div>
      </div>
      <hr style={{ border: 'none', borderTop: '1px solid #ddd', marginTop: '30px', marginBottom: '30px' }} />
      <div style={{ color: '#fff' }}>
        <h2 style={{ marginBottom: '10px' }}>Kids' Collection</h2>
        <p style={{ fontSize: '14px', lineHeight: '1.5' }}>
          Dress your little ones in style with our adorable kids' collection. From cute outfits to comfortable pajamas, we have everything you need.
        </p>
        <ul style={{ fontSize: '14px', lineHeight: '1.5' }}>
          <li>Adorable Outfits</li>
          <li>Comfortable Pajamas</li>
          <li>Cute Accessories</li>
          <li>Trendy Shoes</li>
        </ul>
      </div>
      <hr style={{ border: 'none', borderTop: '1px solid #ddd', marginTop: '0px', marginBottom: '30px' }} />
    </div>
  );
}

export default Products;
