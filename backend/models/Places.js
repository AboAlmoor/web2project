
const mongoose = require('mongoose');

const PlacesSchema = new mongoose.Schema({


    imageUrl: {
        type: String,
        required: true
    },

    abbreviation: {
        type: String,
        required: true
    },

    Name_Places: {
        type: String,
        required: true
    },


    description_Places: {
        type: String,
        required: true
    }

});

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


const modelPlaces = mongoose.model("Places", PlacesSchema);
const PlacesModel = mongoose.model("Places" , PlacesData)
module.exports = PlacesModel;
module.exports = modelPlaces;

