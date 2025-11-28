import express from "express";

import RealEstateItem from "../models/RealEstateItem.js";

const router = express.Router();

router.post("/create", async (req, res) => {
    try {

        const schemaFields = Object.keys(RealEstateItem.schema.obj);

        for (const field of schemaFields) {
            if (RealEstateItem.schema.obj[field].required && req.body[field] === undefined) {
                throw new Error(`Field "${field}" is required.`);
            }
        }

        const newREItem = new RealEstateItem(req.body);
        const createdREItem = await newREItem.save();

        res.status(201).json(createdREItem);
    } catch (error) {
        const errorMessage = "Error: " + error.message;
        res.status(400).json({ error: errorMessage });
    }
});

export default router;