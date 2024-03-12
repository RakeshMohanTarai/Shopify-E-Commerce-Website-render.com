import React, { createContext, useEffect, useState } from "react";
// import all_product from '../Components/Assests/all_product';
import latest_products from "../Components/Assests/Latest Products/latest_products";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 25 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
}

const ShopContextProvider = (props) => {

  const [all_product, setAll_Product] = useState([])
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    fetch('https://rakeshmohantarai-shopify-backend-e.onrender.com/allproducts')
      .then((response) => response.json())
      .then((data) => setAll_Product(data))
  }, [])

  const addToCart = (itemId, selectedSize) => {
    // console.log('Adding to cart:', itemId);
    setCartItems((prevCart) => {
      const newCart = { ...prevCart };
      newCart[itemId] = (newCart[itemId] || 0) + 1;
      if (localStorage.getItem('auth-token')) {
        fetch('https://rakeshmohantarai-shopify-backend-e.onrender.com/addtocart', {
          method: 'POST',
          headers: {
            Accept: 'application/form-data',
            'auth-token': `${localStorage.getItem('auth-token')}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ itemId: itemId, selectedSize: selectedSize })
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
      }
      return newCart;
    });

    // Check if adding this item will exceed the maximum limit of 25
    if (getTotalCartItems() + 1 > 25) {
      // Display a toast notification for the user
      toast.warning("Your cart is full. Maximum 25 items allowed.", {
        autoClose: 1000,
        position: "top-right",
        style: { marginTop: '80px' },
      });
      // Remove the item from the cart as it exceeds the limit
      removeFromCart(itemId);
      return;
    }

    // Display a success notification (optional)
    toast("Item added to the cart.", {
      autoClose: 700,
      position: "top-right",
      style: { marginTop: '0px' },
    });

  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev, [itemId]: prev[itemId] - 1
    }));
    if (localStorage.getItem('auth-token')) {
      fetch('https://rakeshmohantarai-shopify-backend-e.onrender.com/removefromcart', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ itemId: itemId })
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  }

  const getTotalCartItems = () => {
    let totalItem = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }

    if (totalItem > 25) {
      // Display a toast notification for the user
      toast.error("Your cart is full. Maximum 25 items allowed.");
    }

    // console.log("Total Cart Items:", totalItem);
    return totalItem;
  };

  const contextValue = { getTotalCartItems, all_product, cartItems, addToCart, removeFromCart, latest_products };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
