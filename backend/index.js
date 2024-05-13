const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const Guide = require("./models/Secret");

const app = express();
const PORT = process.env.PORT ;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI).then(() => 
{
    app.get("/api/guide", async (req, res) => 
    {
        const guide = await Guide.find();
        res.json(guide);
    });

    app.listen(PORT);
});
