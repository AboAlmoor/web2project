const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const Guide = require("./models/Guide");
const SignupModel = require('./models/Signup')
const bcrypt = require('bcrypt')
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());


mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));


  app.get("/api/guides", async (req, res) => {
    const searchTerm = req.query.searchTerm;
  
    try {
      const searchQuery = searchTerm ? {
        name: { $regex: new RegExp(searchTerm, 'i') } 
      } : {};
  
      const guides = await Guide.find(searchQuery);
      res.json(guides);
    } catch (error) {
      console.error("Error fetching guides:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
  


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

app.post('/Createacount', async (req, res) => {
  const { username, email, password, confirmPassword, country } = req.body;

  try {
    const existingUser = await SignupModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: 'Email already in use' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const confirmPasswordHash = await bcrypt.hash(confirmPassword, 10);

    const newUser = new SignupModel({
      username,
      email,
      password: passwordHash,
      confirmPassword: confirmPasswordHash,
      country
    });

    const savedUser = await newUser.save();
    res.json({ message: 'Account created successfully', user: savedUser });
  } catch (err) {
    
    res.json({ message: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
