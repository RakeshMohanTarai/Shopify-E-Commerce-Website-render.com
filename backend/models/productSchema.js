const mongoose = require('mongoose');

const Product = mongoose.model("product", { 
    // "product" is the name which is store in my data base ex- e-commerce -> products, here the 's' in product added automatically by mongodb.
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {  
        type: Boolean,
        default: true,
    },
})

module.exports = Product;
