import express from "express";

import Employee from "../models/Employee.js";

const router = express.Router();

router.post("/create", async (req, res) => {
    try {
        const { employee_id, name, email, job_title, age, date_hired } = req.body;
        if (!employee_id || !name || !email || !job_title || !age || !date_hired) {
            throw new Error("All fields are required.");
        }

        const newEmployee = new Employee({ employee_id, name, email, job_title, age, date_hired });
        const createdEmployee = await newEmployee.save();

        res.status(201).json(createdEmployee);
    } catch (error) {
        const errorMessage = "Error: " + error.message;
        res.status(400).send(errorMessage)
    }
});

export default router;