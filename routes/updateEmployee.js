import express from "express";

import Employee from "../models/Employee.js";

const router = express.Router();

router.put("/update", (req, res) => {
    try {
        console.log(req.body);
    } catch (error) {
        res.status().send("Error: " + error.message)
    }
});

export default router;