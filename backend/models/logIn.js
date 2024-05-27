import mongoose from 'mongoose';

const logInSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    newPassword: {
        type: String,
    },
    uploadedImageUrl: {
        type: String,
    },

    uploadProfile: {
        type: String,
    },
    bio: {
        type: String,
    },

    location: {
        type: String,
    },


}, { collection: "users" });

const logIn = mongoose.model('users', logInSchema);

export default logIn;