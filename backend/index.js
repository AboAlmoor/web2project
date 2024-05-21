const express = require('express')
const path = require('path');
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser');
const ProfilesModel = require('./models/Profiles')

const app = express()
app.use(cors())
app.use(express.json());
app.use(bodyParser.json());

mongoose.connect(
    "mongodb+srv://mhmadawawdy:test123@cluster0.qagomj3.mongodb.net/mern"
)

app.get('/getUsers', async (req, res) => {
    try {
        const ameer = await ProfilesModel.find();
        res.send(ameer);

    } catch (err) {
        res.json({ message: "database error" }, err)
    }
})

app.get('/checkPhoneNumber', async (req, res) => {
    const { phoneNumber } = req.body;
    try {
        const [user] = await db.query('SELECT * FROM users WHERE phoneNumber = ?', [phoneNumber]);
        if (user.length > 0) {
            res.json({ exists: true });
        } 
        else {
            res.json({ exists: false });
        }

    } catch (error) {
        res.json({ error: 'Database error' });
    }
});

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new ProfilesModel(user);
    await newUser.save();
    return res.json(user);
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB database');
});

app.listen(3001, () => {
    console.log("server is running")
})