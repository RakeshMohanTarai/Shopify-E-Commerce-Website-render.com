import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';

// We intentionally left them empty because you want the effects to run only once, In situations where we 
// intentionally want to omit certain dependencies, you can safely disable the eslint rule for those specific lines. 
// we can do this by adding the following comment at the top of your component files.
/* eslint-disable react-hooks/exhaustive-deps */
const CartItems = () => {
    const { all_product, latest_products, cartItems, addToCart, removeFromCart } = useContext(ShopContext);

    // Combine all products from all_product and latest_products arrays
    const allProducts = [...all_product, ...latest_products];

    // Calculate Subtotal
    const subtotal = allProducts.reduce((acc, product) => {
        if (cartItems[product.id] > 0) {
            return acc + product.new_price * cartItems[product.id];
        }
        return acc;
    }, 0);

    // Total is the same as Subtotal in this example, modify this based on your requirements
    const total = subtotal;

    // Fixed shipping fee for this example
    const shippingFee = 'Free';

    return (
        <div className='cart-container'>
            <div className="cart-header">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
            </div>
            <hr />
            {allProducts.map((product) => {
                const productId = product.id;
                const quantity = cartItems[productId] || 0;

                if (quantity > 0) {
                    return (
                        <div key={productId} className="cart-item">
                            <img src={product.image} alt="" className='product-icon' />
                            <p className='product-title'>{product.name}</p>
                            <p id='new-price'>₹{product.new_price}</p>
                            <div className="quantity-container">
                                <img src="https://cdn-icons-png.flaticon.com/128/9604/9604309.png" alt="Add Quantity"
                                    onClick={() => { addToCart(productId) }} />
                                <p>{quantity}</p>
                                <img src="https://cdn-icons-png.flaticon.com/128/9457/9457106.png" alt="Decrease Qunatity"
                                    onClick={() => { removeFromCart(productId) }} />
                            </div>
                            <p id='total-price'><b>₹{product.new_price * quantity}</b></p>
                        </div>
                    );
                }
                return null;
            })}
            <div className="cart-footer">
                <div className="total-section">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="total-item">
                            <p>Subtotal</p>
                            <p>₹{subtotal}</p>
                        </div>
                        <hr />
                        <div className="total-item">
                            <p>Shipping Fee</p>
                            <p style={{ color: 'grey' }}>{shippingFee}</p>
                        </div>
                        <hr />
                        <div className="total-item">
                            <h3>Total</h3>
                            <h3>₹{total}</h3>
                        </div>
                    </div>
                    <button className="checkout-btn">PROCEED TO CHECKOUT</button>
                </div>
                <div className="promo-section">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="promo-box">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;
