const mongoose = require('mongoose');



 const connectDB = ()=>{
    return mongoose.connect("mongodb+srv://mhmadawawdy:test123@cluster0.qagomj3.mongodb.net/mern")
    .then(result=>{
        console.log("connected to db")
    }).catch(err=>{
        console.log(`error to connect db ${err}`);
    })
}


module.exports = connectDB;