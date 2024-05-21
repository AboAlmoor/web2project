
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  imgurl: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  "about":{
    type: String,
    required: true,
  },
  "perinfo":
  {
    "birth": {
      type: String,
      required: true,
    },
    "work": {
      type: String,
      required: true,
    },
    "age": {
      type: Number,
      required: true,
    },
    "Email": {
      type: String,
      required: true,
    }
  },
  "language": 
  {
    "language_1": {
      type: Number,
      required: true,
    },
    "language_2": {
      type: Number,
      required: true,
    },
    "language_3": {
      type: Number,
      required: true,
    }
  },
  "facebook": {
    type: String,
    required: true,
  },
  "instagram": {
    type: String,
    required: true,
  },
  "whatsapp": {
    type: String,
    required: true,
  },
  "twitter":{
    type: String,
    required: true,
  }
});

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

const UserModel = mongoose.model("guide", UserSchema);
const UnknownModel = mongoose.model("Unknown", UnknownSchema);

module.exports = UserModel;
module.exports = UnknownModel;

