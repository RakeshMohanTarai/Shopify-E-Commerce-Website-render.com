// import React, { useEffect, useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './ListProduct.css';

// const ListProduct = () => {
//   const [allproducts, setAllProducts] = useState([]);

//   // Function to fetch product information from server
//   const fetchInfo = async () => {
//     await fetch('https://rakeshmohantarai-shopify-backend-e.onrender.com/allproducts')
//       .then((res) => res.json())
//       .then((data) => { setAllProducts(data) });
//   }

//   // Fetch product information on component mount
//   useEffect(() => {
//     fetchInfo();
//   }, []);

//   // Function to remove a product
//   const remove_product = async (id) => {
//     await fetch('https://rakeshmohantarai-shopify-backend-e.onrender.com/removeproduct', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ id: id })
//     });

//     // Show notification on successful removal
//     toast.success('Product removed successfully!', { autoClose: 1000 });

//     // Fetch updated product list
//     await fetchInfo();
//   }

//   return (
//     <div className='list-product'>
//       {/* Toast container for displaying notifications */}
//       <ToastContainer style={{marginTop: '80px'}} />

//       <h1>ALL Products List</h1>
//       <div className="listproduct-format-main media-query-format">
//         <p>Products</p>
//         <p>Title</p>
//         <p>Old Price</p>
//         <p>New Price</p>
//         <p>Category</p>
//         <p>Remove</p>
//       </div>
//       <div className="listproduct-allproducts">
//         <hr />
//         {allproducts.map((product, index) => {
//           return (
//             <React.Fragment key={index}>
//               <div className="listproduct-format-main listproduct-format">
//                 <img src={product.image} alt="" className="listproduct-product-icon" /> 
//                 <p className='paragraph'>{product.name}</p>
//                 <p className='paragraph'>₹{product.old_price}</p>
//                 <p className='paragraph'>₹{product.new_price}</p>
//                 <p className='paragraph'>{product.category}</p>
//                 <img onClick={() => {remove_product(product.id)}} src="https://cdn-icons-png.flaticon.com/128/594/594598.png" alt="" className="listproduct-remove-icon" />
//               </div>
//               <hr />
//             </React.Fragment>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default ListProduct;

import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ListProduct.css';

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  // Function to fetch product information from server
  const fetchInfo = async () => {
    await fetch('https://rakeshmohantarai-shopify-backend-e.onrender.com/allproducts')
      .then((res) => res.json())
      .then((data) => { setAllProducts(data) });
  }

  // Fetch product information on component mount
  useEffect(() => {
    fetchInfo();
  }, []);

  // Function to display warning message when trying to remove a product
  const displayWarning = () => {
    toast.warn('Product can only be removed by the developer.', { autoClose: 3000 });
  }

  // Function to remove a product (disabled)
  const removeProduct = (id) => {
    displayWarning();
  }

  return (
    <div className='list-product'>
      {/* Toast container for displaying notifications */}
      <ToastContainer style={{ marginTop: '80px' }} />

      <h1>ALL Products List</h1>
      <div className="listproduct-format-main media-query-format">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => {
          return (
            <React.Fragment key={index}>
              <div className="listproduct-format-main listproduct-format">
                <img src={product.image} alt="" className="listproduct-product-icon" />
                <p className='paragraph'>{product.name}</p>
                <p className='paragraph'>₹{product.old_price}</p>
                <p className='paragraph'>₹{product.new_price}</p>
                <p className='paragraph'>{product.category}</p>
                <img onClick={displayWarning} src="https://cdn-icons-png.flaticon.com/128/594/594598.png" alt="" className="listproduct-remove-icon" />
              </div>
              <hr />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default ListProduct;
