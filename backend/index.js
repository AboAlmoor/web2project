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
const bcrypt = require('bcrypt')
const path = require('path');
const bodyParser = require('body-parser');

const UnknownModel = require('./models/Secret')
const Guide = require("./models/Guide");
const RestaurantModel =require('./models/Restaurant')
const PlacesModel = require("./models/Places");
const SignupModel = require('./models/Signup');
const places = require('./models/Places.js');
const connectDB = require('./db/connection.js');
const logIn = require('./models/logIn');
const connectDB = require('./connection/connect');
const ProfilesModel = require('./models/Profiles')


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
connectDB();

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

//mhmad awawdy
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

// abood 
app.get('/getRestaurant' , (req, res) => {
  RestaurantModel.find()
  .then(Restaurant => res.json(Restaurant))
  .catch(err => res.json(err))

})

//ahmad 
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

// saleh 
app.get('/search/:key', async (req, res) => {
  
 
    let data = await places.find({
       abbreviation : req.params.key
    });

    return res.json(data);

});

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

//ameer 
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


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


