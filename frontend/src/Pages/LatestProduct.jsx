import React, { useContext } from 'react';
import './CSS/LatestProduct.css';
import { ShopContext } from '../Context/ShopContext';
import { Item } from '../Components/Item/Item';
import Latest from '../Components/Latest/Latest';
// import latest_banner from '../Components/Assests/Latest Products/Latest Banner.jpg';

export const LatestProduct = () => {
  
  const { latest_products } = useContext(ShopContext);

  return (
    <div>
      <Latest />
      <div className='latest-product'>
        <div className='latest-produts'>

          {latest_products.map((item, index) => {
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
          })}
        </div>
      </div>
    </div>
  );
};
