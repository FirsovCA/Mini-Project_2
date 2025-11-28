import express from 'express';

import RealEstateItem from '../models/RealEstateItem.js';

const router = express.Router();

router.put('/update/:property_id', async (req, res) => {
    try {
        const { property_id } = req.params;

        const updatedREItem = await RealEstateItem.findOneAndUpdate(
            { property_id },
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedREItem) {
            throw new Error(`Real Estate Item with ID ${property_id} not found`);
        }

        res.status(200).json(updatedREItem);
    } catch (error) {
        const errorMessage = 'Error: ' + error.message;
        res.status(400).json({ error: errorMessage });
    }
});

export default router;