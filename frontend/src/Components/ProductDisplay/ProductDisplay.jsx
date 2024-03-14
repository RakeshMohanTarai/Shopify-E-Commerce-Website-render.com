import React, { useContext, useState, useEffect } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assests/star_icon.png';
import star_dull_icon from '../Assests/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDisplay = (props) => {
  const { addToCart } = useContext(ShopContext);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState(null);
  const authToken = localStorage.getItem('auth-token');

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (!authToken) {
      // User is not logged in, prompt them to log in
      toast.warn('Please login to use "Add to Cart".', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // You can redirect the user to the login page here if needed
    } else if (selectedSize) {
      // User is logged in and has selected a size, add item to cart
      addToCart(props.product.id, selectedSize);
    } else {
      // User is logged in but has not selected a size
      toast.warn('Please select a size before adding to cart.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <div className="loading-text">Loading...</div>
      </div>
    );
  }

  if (!props.product) {
    return null;
  }

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={props.product.image} alt="img" />
          <img src={props.product.image} alt="img" />
          <img src={props.product.image} alt="img" />
          <img src={props.product.image} alt="img" />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={props.product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{props.product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">₹{props.product.old_price}</div>
          <div className="productdisplay-right-price-new">₹{props.product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          <p>A lightweight, usually knitter, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt and outer garment.</p>
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-size-options">
            <div
              className={`size-option ${selectedSize === 'S' ? 'selected' : ''}`}
              onClick={() => handleSizeSelect('S')}
            >
              S
            </div>
            <div
              className={`size-option ${selectedSize === 'M' ? 'selected' : ''}`}
              onClick={() => handleSizeSelect('M')}
            >
              M
            </div>
            <div
              className={`size-option ${selectedSize === 'L' ? 'selected' : ''}`}
              onClick={() => handleSizeSelect('L')}
            >
              L
            </div>
            <div
              className={`size-option ${selectedSize === 'XL' ? 'selected' : ''}`}
              onClick={() => handleSizeSelect('XL')}
            >
              XL
            </div>
            <div
              className={`size-option ${selectedSize === 'XXL' ? 'selected' : ''}`}
              onClick={() => handleSizeSelect('XXL')}
            >
              XXL
            </div>
          </div>
        </div>
        <button onClick={handleAddToCart}>
          ADD TO CART
        </button>
        <ToastContainer style={{marginTop: "77.5px"}} />
        <p className="productdisplay-right-category">
          <span>Category :</span> Women, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
