const mongoose = require('mongoose');

const connectDB = () => {
    return mongoose.connect("mongodb+srv://mhmadawawdy:test123@cluster0.qagomj3.mongodb.net/test")
        .then(() => {
            console.log("Connected to db");
        })
        .catch(err => {
            console.log(`Error connecting to db: ${err}`);
        });
};

module.exports = connectDB;
