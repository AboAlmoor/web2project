import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstname: { 
        type: String,
        required: true 
    },
    lastname: {
        type: String,
        required: true 
    },
    email: { 
        type: String,
        required: true,
        unique: true 
    },
    userID: { 
        type: String,
        required: true,
        unique: true 
    },
    password: { 
        type: String,
        required: true 
    },
    __v:{
        type: Number,
        required: true 
    }
});

const usersModel = mongoose.model('userstests', userSchema);
export default usersModel;
