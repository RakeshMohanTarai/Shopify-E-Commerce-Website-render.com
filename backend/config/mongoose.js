const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://rakeshmohan:KPStYOmYocdHTJ2m@e-commerce-react-yt-clu.sitjyov.mongodb.net/E-commerce");
// what ever name i give here it should be the name of the main folder which is store in the mongodb 
// ex- here E-commerce is the main folder name, E-commerce -> products

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

const db = mongoose.connection;

module.exports = db;