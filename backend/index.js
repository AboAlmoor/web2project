import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
dotenv.config();

import KnowTheUnkown from './routes/KnowTheUnkow.js';
import Guide from './routes/Guides.js';
import Signup from './routes/SignUp.js';
import Places from './routes/Places.js';
import SignIn from './routes/SignIn.js';
import Resturant from './routes/Resturant.js';
import HomePage from './routes/HomePage.js';
import Profile from './routes/Profile.js';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected Successfully to DB");
    }).catch((error) => {
        console.log("Error connecting to DB: ", error);
    });


    app.use(KnowTheUnkown);
    app.use(Guide);
    app.use(Signup);
    app.use(Places);
    app.use(SignIn);
    app.use(Resturant);
    app.use(HomePage);
    app.use(Profile);

// ahmad & abood
export const ForgotPassword = async (req, res) => {
    const { email } = req.body;
    console.log('Received email:', email); 

    try {
        const RandomCode = customAlphabet('1234567890', 6);
        const codeToSend = RandomCode();
        console.log('Generated code:', codeToSend);

        const user = await usersModel.findOneAndUpdate(
            { email },
            { sendCode: codeToSend },
            { new: true }
        );

        if (!user) {
            console.error('User not found for email:', email); 
            return res.status(404).json({ message: 'User not found' });
        }

        await sendEmail(email, 'Reset Password', `<h1>${codeToSend}</h1>`);
        console.log('Email to : ', email); 
        return res.status(200).json({ message: 'Success', codeToSend });
    } catch (err) {
        console.error('Error forgot password:', err); 
        res.status(500)
        .json({ 
            message: 'Error' , err
        });
    }
};

app.post('/ForgotPassword', ForgotPassword); 

app.post('/verifyCode', async (req, res) => {

    const { codeInData } = req.body; 
    try {
        const user = await usersModel.findOne({ sendCode: codeInData });
        if (!user) {
            return res.status(400)
            .json({ 
                message: 'Invalid code' 
            });
        }
        return res.status(200)
        .json({
            message: 'Code verified' 
        });
    } catch (err) {
        console.error('Error', err);
        res.status(500)
        .json({ 
            message: 'Error'
        });
    }
});

app.post('/api/auth/users', async (req, res) => {
    const { email, newPassword } = req.body;

    try {
        const user = await SignupModel.findOne({ email });

        if (!user) {
            return res.send({ message: 'Email not found. Password has not been changed.' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();

        res.send({ message: 'Password updated successfully' });
    } catch (error) {
        console.error(error);
        res.send({ message: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
