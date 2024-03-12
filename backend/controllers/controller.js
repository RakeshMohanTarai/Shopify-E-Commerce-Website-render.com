const Product = require("../models/productSchema");
const Users = require("../models/loginsignupSchema");
const jwt = require("jsonwebtoken"); // for security checking

// Controller function for adding a product into MongoDB
exports.addProduct = async (req, res) => {
    try {
        // Retrieve all products from the database
        const products = await Product.find({});

        // :- Generate ID automatically for the new product which is added to the Database
        //  let id;
        // if (products.length > 0) {
        //     let lastProduct = products[products.length - 1];
        //     id = lastProduct.id + 1;
        // } else {
        //     id = 1;
        // }
        // :- Here instead of using if-else we use terminary to get the same output in less code
        const id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

        // :- Create a new product object
        //       const product = new Product({
        //     id: id,
        //     name: req.body.name,
        //     image: req.body.image,
        //     category: req.body.category,
        //     new_price: req.body.new_price,
        //     old_price: req.body.old_price,
        // });
        // :- Here as you we see only the ID of the product which is always diff. so we use here we take only take the ID and 
        // using the spread operator we can collect all the data to the req.body instead of writing indivisually. 
        const product = new Product({
            id,
            ...req.body
        });

        // Save the product to the database
        await product.save();

        // Respond with success message
        res.json({
            success: true,
            name: req.body.name,
        });
    } catch (error) {
        // If an error occurs, log the error and send an error response
        console.error("Error occurred while adding product:", error);
        res.status(500).json({ success: false, error: "Failed to add product" });
    }
};

// Controller function for removing a product from MongoDB
exports.removeProduct = async (req, res) => {
    try {
        // :- Extract the product ID from the request body
        // const { id } = req.body;
        // :- Find and delete the product based on the provided ID
        // await Product.findOneAndDelete({ id });
        // :- Here instead of the exracting the id first and than delete it we can directly delete it 
        await Product.findOneAndDelete({ id: req.body.id });


        // Respond with success message
        res.json({
            success: true,
            name: req.body.name,
        });
    } catch (error) {
        // If an error occurs, log the error and send an error response
        console.error("Error occurred while removing product:", error);
        res.status(500).json({ success: false, error: "Failed to remove product" });
    }
};

// fetching all the data from the MongoDB 
exports.allproducts = async (req, res) => {
    // Define the route handler for /allproducts endpoint
    try {
        // Fetch all products from the database
        const products = await Product.find({});
        // Send the fetched products as a JSON response
        res.json(products);
    } catch (error) {
        // If an error occurs, send an error response
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Failed to fetch products" });
    }
};
// User signup function
exports.signup = async (req, res) => {
    try {
        // Check if user with provided email already exists
        let existingUser = await Users.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ success: false, errors: "An account with this email already exists" });
        }

        // Create an empty cart array with 300 elements
        const cart = Array.from({ length: 300 }, () => ({ itemId: "", quantity: 0, selectedSize: "" }));

        // Create a new user instance
        const user = new Users({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            cartData: cart,
        });

        // Save the user to the database
        await user.save();

        // Generate JWT token for authentication
        const token = jwt.sign({ user: { id: user.id } }, 'secret_ecom');

        // Return success response with token
        res.status(201).json({ success: true, token });
    } catch (error) {
        // Handle any errors and return error response
        console.error(error);
        res.status(500).json({ success: false, errors: "Server error" });
    }
};

// User login function
exports.login = async (req, res) => {
    try {
        // Extract email and password from request body
        const { email, password } = req.body;

        // Find user by email in the database
        let user = await Users.findOne({ email });
        if (!user) {
            // Return error response if user not found
            return res.status(401).json({ success: false, errors: "Email not found" });
        }

        // Compare provided password directly with the stored password
        if (password !== user.password) {
            // Return error response if passwords don't match
            return res.status(401).json({ success: false, errors: "Incorrect Password" });
        }

        // Generate JWT token for authentication
        const token = jwt.sign({ user: { id: user.id } }, 'secret_ecom');

        // Return success response with token
        res.json({ success: true, token });
    } catch (error) {
        // Handle any errors and return error response
        console.error(error);
        res.status(500).json({ success: false, errors: "Server error" });
    }
};

exports.newcollections = async (req, res) => {
    try {
        // Fetch all products from the database
        const products = await Product.find({});

        // Calculate the latest products for new collection
        // Here, we slice the products array starting from index 1
        // Then, we take the last 8 products from the sliced array
        const newCollection = products.slice(1).slice(-8);

        // Send the new collection as JSON response
        res.json(newCollection);
    } catch (error) {
        // If there's an error, send an error response
        console.error("Error fetching new collection:", error);
        res.status(500).json({ error: 'Failed to fetch new collection' });
    }
};


//creating endpoint for popular in women section
exports.popular_in_women = async (req, res) => {
    try {
        // Fetch all products from the database
        const products = await Product.find({ category: "women" });

        // Calculate the latest products for new collection
        // Here, we slice the products array starting from index 1
        // Then, we take the last 8 products from the sliced array
        let popular_in_women = products.slice(0, 8);

        // console.log("Popular in women fetched");

        res.send(popular_in_women);
    } catch (error) {
        //  console.error("Error fetching new collection:", error);
        res.status(500).send({ error: 'Failed to fetch new collection' });
    }
};

// Middleware to fetch user
exports.fetchUser = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).json({ errors: "Please authenticate using a valid token" });
    } else {
        try {
            const data = jwt.verify(token, 'secret_ecom');
            req.user = data.user;
            next();
        } catch (error) {
            return res.status(401).json({ errors: "Please authenticate using a valid token" });
        }
    }
};

exports.addtocart = async (req, res) => {
    try {
        const { itemId, selectedSize } = req.body;
        const userId = req.user.id;

        let userData = await Users.findOne({ _id: userId });

        userData.cartData[itemId].quantity += 1;
        userData.cartData[itemId].selectedSize = selectedSize;

        // Save the updated user data
        await userData.save();

        res.json({ message: "Added Successfully to the user cart" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Endpoint for removing product from cart
exports.removefromcart = async (req, res) => {
    // console.log("removed", req.body.itemId);
    let userData = await Users.findOne({ _id: req.user.id });
    if (userData.cartData[req.body.itemId] > 0) {
        userData.cartData[req.body.itemId] -= 1;
        await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
        res.json({ message: "Removed Successfully from the user cart" });
    }
};