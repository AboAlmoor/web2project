const mongoose = require('mongoose')

const PlacesData = new mongoose.Schema({
    imageUrl:{
        type:String,
        required:true
    },
    abbreviation:{
        type:String,
        required:true
    },
    name_Places:{
        type:String,
        required:true
    },
    description_Places:{
        type:String,
        required:true
    }

})

const PlacesModel = mongoose.model("Places" , PlacesData)
module.exports = PlacesModel;