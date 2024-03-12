import React from 'react';

const About = () => {
  return (
    <div style={{ 
      padding: '20px', 
      borderRadius: '8px', 
      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
      background: 'linear-gradient(to right, #f6d365, #fda085)', /* Gradient color */
    }}>
      <h1 style={{ color: '#fff', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>About Shopify</h1>
      <div style={{ marginTop: '20px', color: '#fff', lineHeight: '1.6' }}>
        <p>
          Shopify is an e-commerce platform that enables entrepreneurs to start, grow, and manage their online businesses. Founded in 2006, Shopify has become one of the leading e-commerce solutions, powering over 1.7 million businesses worldwide.
        </p>
        <p>
          At Shopify, we believe in the power of entrepreneurship and the ability of small businesses to make a big impact. Our mission is to make commerce better for everyone by providing easy-to-use tools and resources to help entrepreneurs succeed.
        </p>
        <p>
          Whether you're just starting out or looking to scale your business, Shopify offers a range of features and services to support your journey. From customizable storefronts to secure payment processing and shipping solutions, we've got you covered.
        </p>
        <p>
          Join the Shopify community today and unleash your entrepreneurial spirit!
        </p>
        <p>
          With Shopify, you can:
        </p>
        <ul>
          <li>Build a stunning online store with customizable themes.</li>
          <li>Accept secure payments from customers around the world.</li>
          <li>Manage your inventory and orders with ease.</li>
          <li>Access powerful analytics to track your business growth.</li>
          <li>Accept secure payments from customers around the India.</li>
          <li>Connect with customers through marketing and social media integrations.</li>
        </ul>
        <p>
          Start your journey with Shopify and turn your ideas into reality!
        </p>
      </div>
    </div>
  );
}

export default About;
