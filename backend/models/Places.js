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


const modelPlaces = mongoose.model("Places", PlacesSchema);
module.exports = modelPlaces;
