const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const RestaurantModel =require('./models/Restaurant')


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://mhmadawawdy:test123@cluster0.qagomj3.mongodb.net/mern?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));


app.get('/getRestaurant' , (req, res) => {
  RestaurantModel.find()
  .then(Restaurant => res.json(Restaurant))
  .catch(err => res.json(err))

})

app.listen(3002,()=>{

    console.log("server is running")
})
