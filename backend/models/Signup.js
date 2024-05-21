const mongoose = require('mongoose');
const Signupschema = new mongoose.Schema({
    username:{
        type : String,
        required: true,
    },
    email:{
        type : String,
        required: true,
        unique:true
    },
    password:{
        type : String,
        required: true,
    },
    country:{
        type : String,
        required: true,
    },
})
const SignupModel = mongoose.model("user",Signupschema)
module.exports = SignupModel