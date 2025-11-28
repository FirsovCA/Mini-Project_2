import express from 'express';

import RealEstateItem from '../models/RealEstateItem.js';

const router = express.Router();

router.get('/read', async (req, res) => {
    try {
        const RealEstateItems = await RealEstateItem.find();
        res.status(200).json(RealEstateItems);
    } catch (error) {
        const errorMessage = 'Error: ' + error.message;
        res.status(400).json({ error: errorMessage });
    }
});

router.get('/read/:property_id', async (req, res) => {
    try {
        const { property_id } = req.params;

        const realEstateItem = await RealEstateItem.findOne({ property_id });

        if (!realEstateItem) {
            throw new Error(`Real Estate Item with ID ${property_id} not found`);
        }

        res.status(200).json(realEstateItem);
    } catch (error) {
        const errorMessage = 'Error: ' + error.message;
        res.status(400).json({ error: errorMessage });
    }
});

export default router;