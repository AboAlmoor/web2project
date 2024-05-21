// const Guide = require("./models/Secret");
// mongoose.connect(process.env.MONGODB_URI).then(() => 
// {
//     app.get("/api/guide", async (req, res) => 
//     {
//         const guide = await Guide.find();
//         res.json(guide);
//     });
//     app.listen(PORT);

require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UnknownModel = require('./models/Secret')
const Guide = require("./models/Guide");


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log("Connected Succesfully DB ")
}).catch((error) => {
    console.log("error with connecting to DB ", error)
})
//mohamad & yazan 
app.get('/getUnknown', async (req, res) => {
    try {
        const unknown = await UnknownModel.find()
        res.send(unknown)
    }
    catch (error) {
        res.json(error)
    }
})

app.get("/api/guides", async (req, res) => {
  try {
    const guides = await Guide.find();
    res.json(guides);
  } catch (error) {
    
    res.json({ message: "Internal Server Error" });
  }
});

// mohamad amad
app.get("/api/guides/:id", async (req, res) => {
  try {
    const guide = await Guide.findById(req.params.id);
    if (!guide) {
      return res.json({ message: "Guide not found" });
    }
    res.json(guide);
  } catch (error) {
    console.error("Error fetching guide info:", error);
    res.json({ message: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
