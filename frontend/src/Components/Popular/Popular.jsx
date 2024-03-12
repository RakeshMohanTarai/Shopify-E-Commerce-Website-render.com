import React, { useState, useEffect } from 'react';
import './Popular.css';
import { Item } from '../Item/Item';
// import data_product from '../Assests/data';

export const Populor = () => {

    const [popularProducts, setPopularProducts] = useState([]);

    useEffect(() => {
        fetch('https://rakeshmohantarai-shopify-backend-e.onrender.com/popularinwomen')
        .then((response) => response.json())
        .then((data) => setPopularProducts(data))
     },[]);
    
    return ( 
        <div className='populor'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {popularProducts.map((item, index) => {
                    return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}
