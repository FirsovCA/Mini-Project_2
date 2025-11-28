import express from 'express';

import RealEstateItem from '../models/RealEstateItem.js';

const router = express.Router();

router.delete('/delete/:property_id', async (req, res) => {
    try {
        const { property_id } = req.params;
        const deletedREItem = await RealEstateItem.findOneAndDelete({ property_id });
        if (!deletedREItem) {
            throw new Error(`Real Estate Item with ID ${property_id} not found`);
        }

        res.status(200).json({
            message: `Real Estate Item with ID ${property_id} deleted successfully`,
            deleted: deletedREItem
        });
    } catch (error) {
        const errorMessage = 'Error: ' + error.message;
        res.status(400).json({ error: errorMessage });
    }
});

export default router;