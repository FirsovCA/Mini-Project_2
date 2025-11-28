import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import createEmployee from "./routes/createEmployee.js";
import deleteEmployee from "./routes/deleteEmployee.js";
import readEmployee from "./routes/readEmployee.js";
import updateEmployee from "./routes/updateEmployee.js";

dotenv.config();

const app = express();
const port = 3000;
const mongoUrl = process.env.CONNECTION_STRING;

app.use(express.json());

app.use("/api/employees", createEmployee);

async function run() {
    const client = mongoose
    try {
        await client.connect(mongoUrl);
        console.log("You successfully connected to MongoDB");
    } catch (err) {
        process.exit(1);
    }
}

run();

app.listen(port, () => {
    console.log(`App Url is http://localhost:${port}`);
});
