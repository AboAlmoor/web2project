const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
    imageUrl:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    subtitle:{
        type:String,
        required:true
    }
})


const RestaurantModel =mongoose.model("Restaurant",RestaurantSchema)
module.exports = RestaurantModel