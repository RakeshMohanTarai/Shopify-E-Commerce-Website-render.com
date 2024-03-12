const mongoose = require('mongoose');

const Users = mongoose.model('Users', {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: [{
        _id: mongoose.Schema.Types.ObjectId, // Unique identifier for each item
        quantity: Number,
        selectedSize: String,
    }],
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = Users;
