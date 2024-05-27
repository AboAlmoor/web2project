import express from "express";
import Guide from '../models/Guide.js';

const router = express.Router();

router.get("/api/guides", async (req, res) => {
    try {
        const guides = await Guide.find();
        res.json(guides);
    } catch (error) {
        res.json({ message: "Internal Server Error" });
    }
});

router.get("/api/guides/:id", async (req, res) => {
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

export default router;