import React, { useState } from 'react';
import './AddProduct.css'; // Importing CSS file for styling
import upload_area from '../../assets/upload_area.svg'; // Importing image asset
import { ToastContainer, toast, Slide } from 'react-toastify'; // Importing Toastify

import 'react-toastify/dist/ReactToastify.css'; // Importing Toastify CSS

// Functional component AddProduct
const Addproduct = () => {

  // State hooks for managing image and product details
  const [image, setImage] = useState(null); // State for image
  const [productDetails, setProductDetails] = useState({ // State for product details
    name: "",
    image: "",
    category: "",
    old_price: "",
    new_price: "",
  })

  // Handler function for image upload
  const imageHandler = (e) => {
    setImage(e.target.files[0]); // Setting the image to the selected file
  }

  // Handler function for input changes
  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value }); // Updating product details state based on user input
  }

  // Function to validate input fields
  const validateInputs = () => {
    const requiredFields = ['name', 'old_price', 'new_price', 'category']; // Array of required fields

    // Looping through each required field
    for (const field of requiredFields) {
      // Checking if the value of the field in productDetails is empty
      if (productDetails[field] === "") {
        toast.error(`Please fill in product ${field.replace('_', ' ')}`, {
          autoClose: 1500, // Close the notification after 1 second
          transition: Slide, // Add sliding effect
          style: { marginTop: '80px' }
        }); 
        return false; // Returning false as validation failed
      }
    }

    // Checking if an image is selected
    if (!image) {
      toast.error("Please select an image", {
        autoClose: 1500,
        transition: Slide,
        style: { marginTop: '80px' }
      }); 
      return false; // Returning false as validation failed
    }

    return true; // Returning true if all validations passed
  }

  const Add_Product = async () => {
    // Validating inputs before proceeding
    if (!validateInputs())
      return;

    let responseData; // Variable to store response data from server
    let product = productDetails; // Copying product details to a variable
    let formData = new FormData(); // Creating a FormData object to send files

    formData.append('product', image); // Appending image data to FormData object

    // This part of the code sends the selected image file to the server using a POST request. Once the server processes the request, 
    // it sends back a response, which is then parsed as JSON, and the data from the response is stored for further use in the responseData variable.
    await fetch('https://rakeshmohantarai-shopify-backend-e.onrender.com/upload', {
      method: 'POST', // HTTP POST method
      headers: {
        Accept: 'application/json', // Accepting JSON response
      },
      body: formData, // Setting FormData as request body
    })
    // After the server processes the request and sends back a response, the .then() method is used to handle the response. 
    // The resp.json() call parses the response body as JSON, transforming it into a JavaScript object. 
    // Then, the parsed JSON data is stored in the responseData variable.
      .then((resp) => resp.json()) // Parsing response as JSON, This allows us to work with the data that the server sends back to us.
      .then((data) => { responseData = data }); // Storing response data

    // If image upload is successful
    if (responseData && responseData.success) {
      // When you upload the image, the server saves it and gives back a web address (URL) where this image is stored.
      // now here we store the URL link to the product data base, ex - name,image,old price ..., here in the image section we fillup it with the given URL link. 
      product.image = responseData.image_url; 
      console.log('product Image',product);

      // Here now all the image attachment to the product is completed, now product have all the data like name, image, price ... // 

      // Adding product details to database
      await fetch('https://rakeshmohantarai-shopify-backend-e.onrender.com/addproduct', {
        method: 'POST', // HTTP POST method
        headers: {
          Accept: 'application/json', // Accepting JSON response
          'Content-Type': 'application/json', // Specifying JSON content type
        },
        body: JSON.stringify(product), // Converting product object to JSON string
      })
        .then((resp) => resp.json()) // Parsing response as JSON, This allows us to work with the data that the server sends back to us.
        .then((data) => {
          if (data.success) {
            toast.success("Product successfully added to the database", {
              autoClose: 1000,
              transition: Slide,
              style: { marginTop: '80px' }
            }); 
            setProductDetails({
              name: "",
              image: "",
              category: "",
              old_price: "",
              new_price: "",
            }); // Resetting product details state
            setImage(null); // Resetting image state
          } else {
            toast.error("Failed to add product", {
              autoClose: 1500,
              transition: Slide,
              style: { marginTop: '80px' }
            }); 
          }
        })
    }
  }

  return (
    <div className='add-product'>
      {/* Input field for product title */}
      <div className="addproduct-itemfield">
        <h3 style={{ marginTop: '13px', fontSize: '22px' }}>Product Title</h3>
        <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder='Type here' />
      </div>
      {/* Input fields for price and offer price */}
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input value={productDetails.old_price} onChange={changeHandler} type="number" min="0" name='old_price' placeholder='Type here' />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input value={productDetails.new_price} onChange={changeHandler} type="number" min="0" name='new_price' placeholder='Type here' />
        </div>
      </div>
      {/* Dropdown for product category */}
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
          <option value="" style={{ color: 'grey' }} disabled>Select</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      {/* Image upload field */}
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img src={image ? URL.createObjectURL(image) : upload_area} className='addproduct-thumnail-img' alt="" />
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
      </div>
      {/* Button to add product */}
      <button onClick={Add_Product} className='addproduct-btn'>Add Product</button>
      {/* Toastify container */}
      <ToastContainer 
        autoClose={1500}
        transition={Slide}
      />
    </div>
  )
}

export default Addproduct;
