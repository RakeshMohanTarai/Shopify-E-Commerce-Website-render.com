const express = require("express");
const router = express.Router();
const multer = require('../multer/multer');
const controller = require('../controllers/controller');
const fetchUser = require("../controllers/controller").fetchUser;

// set the multer middleware to every router 
router.use("/", multer);

// Define routes
router.get("/", (req, res) => {
    // Route to check if the server is running
    res.send("Express App is Running");
});

// Route for adding a product
router.post('/addproduct', controller.addProduct);

// Route for removing a product
router.post('/removeproduct', controller.removeProduct);

// Route for get all the products data from database
router.post('/allproducts', controller.allproducts);

router.post('/signup', controller.signup);

router.post('/login', controller.login);

router.get('/allproducts', controller.allproducts);

router.get('/newcollections', controller.newcollections);

router.get('/popularinwomen', controller.popular_in_women);

router.post('/addtocart', fetchUser, controller.addtocart);

router.post('/removefromcart', fetchUser, controller.removefromcart);

module.exports = router;
