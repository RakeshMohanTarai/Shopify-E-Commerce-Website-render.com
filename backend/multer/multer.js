const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Define multer storage configuration
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

// Create multer instance with storage configuration
const upload = multer({ storage: storage });

// Update the URL to reflect the new deployment URL
const deploymentURL = 'https://rakeshmohantarai-shopify-backend-e.onrender.com';

// Handle POST request for uploading a single file
router.post("/upload", upload.single('product'), (req, res) => {
    console.log('Image has been uploaded successfully');
    // Respond with success message and URL of the uploaded image
    res.json({
        success: 1,
        image_url: `${deploymentURL}/images/${req.file.filename}`
    })
})

module.exports = router;
