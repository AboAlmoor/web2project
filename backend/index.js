const express = require('express');
const logIn = require('./models/logIn');
const bcrypt = require('bcrypt');
const connectDB = require('./connection/connect');
const cors = require('cors'); 

const app = express();
app.use(express.json());

app.use(cors()); 

connectDB();

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await logIn.findOne({ username });

        if (!user) {
            return res.status(400).send("Invalid username or password");
        }

        const match = await bcrypt.compare(password, user.password);

        if (match) {
            res.send("Password match");
            console.log('Password match');
        } else {
            res.status(401).send("The password is incorrect");
            console.log('The password is incorrect');
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(5000, () => {
    console.log("Server is running on port 3001");
});
