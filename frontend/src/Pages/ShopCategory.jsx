import React, { useState, useEffect } from 'react';
import './CSS/ShopCategory.css';
import dropdown_icon from '../Components/Assests/dropdown_icon.png';
import { Item } from '../Components/Item/Item';
// import { ShopContext } from '../Context/ShopContext';
// import { useContext } from 'react';

export const ShopCategory = (props) => {
  
  // const { all_product } = useContext(ShopContext);
  const [all_products, setAll_Products] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch('https://rakeshmohantarai-shopify-backend-e.onrender.com/allproducts')
      .then((response) => response.json())
      .then((data) => {
        setAll_Products(data);
        setLoading(false); // Move setLoading inside the .then() block
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Also handle error case and set loading to false
      });
  }, []);  

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <div className="loading-text">Loading...</div>
      </div>
    ); // Render loading indicator
  }

  return (
    <div className='shop-catagory'>
      <img className='shopcategory-banner' src={props.banner} alt='banner' />
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt='drop-down' />
        </div>
      </div>
      <div className='shopcategory-produts'>
        {all_products.map((item, index) => {
          // JavaScript treats "Kid" and "kid" as different strings. 
          // In our original code, when you changed the category in the data to "Kid", you also needed to update the comparison in the ShopCategory component to be case-insensitive. 

          //CHECK BY LOWER CASE :-
          // const categoryLowerCase = item.category.toLowerCase();
          // if (props.category.toLowerCase() === categoryLowerCase) {
          // So here we have two options either we convert the letter from upper case to lower case than check or we can direcly check with upper case.

          //CHECK BY UPPER CASE :-
          if (props.category.toLowerCase() === item.category.toLowerCase()) {
            return (
              <div key={index} className='custom-item-container'>
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};
