import mongoose from 'mongoose';

const logInSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },


    password: {
        type: String,
        required: true
    },

}, { collection: "createacounts" });

const logIn = mongoose.model('createacounts', logInSchema);

export default logIn;