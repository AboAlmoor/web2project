const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PlacesModel = require("./models/Places");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://mhmadawawdy:test123@cluster0.qagomj3.mongodb.net/mern?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));  

app.get('/getPlaces',  async (req, res) => {

    try {
        const allPlaces = await PlacesModel.find(); 
        console.log(allPlaces);
        res.json(allPlaces);
    } catch (err) {
        console.error('Error fetching places  info:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
app.listen(4000, () => {
    console.log("Started on port 4000!");
});