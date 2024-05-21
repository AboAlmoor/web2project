const mongoose = require('mongoose');

const UnknownSchema = new mongoose.Schema({
    imageUrl: {
        type:String,
        required:true
    },
    titl: {
        type:String,
        required:true

    },
    subtitle: {
        type:String,
        required:true
    }
});

const UnknownModel = mongoose.model("Unknown", UnknownSchema);

module.exports = UnknownModel;