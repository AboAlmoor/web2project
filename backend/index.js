require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UnknownModel = require('./models/Secret')
const PORT = process.env.PORT || 5000;

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log("Connected Succesfully DB ")
}).catch((error) => {
    console.log("error with connecting to DB ", error)
})

app.get('/getUnknown', async (req, res) => {
    try {
        const unknown = await UnknownModel.find()
        res.send(unknown)
    }
    catch (error) {
        res.json(error)
    }
})

app.listen(PORT, () => {
    console.log('server is running  ')
})
