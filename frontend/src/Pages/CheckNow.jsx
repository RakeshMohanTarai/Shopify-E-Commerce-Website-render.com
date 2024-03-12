import React, { useContext } from 'react';
import './CSS/CheckNow.css';
import { ShopContext } from '../Context/ShopContext';
import { Item } from '../Components/Item/Item';
import Check from '../Components/Check/Check';

export const CheckNow = () => {
  
  const { all_product } = useContext(ShopContext);

  return (
    <div>
      <Check />
      <div className='check-product'>
        <div className='check-produts'>
        {all_product.map((item, index) => {
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
