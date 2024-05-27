import express from "express";
import UnknownModel from '../models/unknown.js';

const router = express.Router();

router.get('/getUnknown', async (req, res) => {
    try {
        const unknown = await UnknownModel.find();
        res.send(unknown);
    } catch (error) {
        res.json(error);
    }
});

export default router;