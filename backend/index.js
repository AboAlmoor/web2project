const express = require('express');
const places = require('./models/Places.js');
const connectDB = require('./db/connection.js');
const cors = require ('cors');


const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.get('/search/:key', async (req, res) => {
  
 
    let data = await places.find({
       abbreviation : req.params.key
    });

    return res.json(data);

});

app.listen(5000,()=>{

    console.log('Server is running')

})
