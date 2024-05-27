import express from "express";
import ProfilesModel from '../models/Profiles.js';

const router = express.Router();

router.get('/getUsers', async (req, res) => {
    try {
        const ameer = await ProfilesModel.find();
        res.send(ameer);

    } catch (err) {
        res.json({ message: "database error" }, err)
    }
})
router.get('/checkPhoneNumber', async (req, res) => {
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

router.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new ProfilesModel(user);
    await newUser.save();
    return res.json(user);
})

router.get('/getUsers1',  async (req, res) => {
    try {
        const allusers = await usersModel.find();
        console.log(allusers);
        res.json(allusers);
    } catch (err) {
        console.error('Error fetching Users info:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    } 
});

export default router;