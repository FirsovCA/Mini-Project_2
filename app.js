import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import createRealEstateItem from "./routes/createRealEstateItem.js";
import deleteRealEstateItem from "./routes/deleteRealEstateItem.js";
import readRealEstate from "./routes/readRealEstate.js";
import updateRealEstateItem from "./routes/updateRealEstateItem.js";

dotenv.config();

const app = express();
const port = 3000;
const mongoUrl = process.env.CONNECTION_STRING;

app.use(express.json());

app.use("/api/realestate", createRealEstateItem);
app.use('/api/realestate', deleteRealEstateItem);
app.use('/api/realestate', readRealEstate);``
app.use('/api/realestate', updateRealEstateItem);

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
