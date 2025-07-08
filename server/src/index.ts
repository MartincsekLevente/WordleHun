import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import * as process from "node:process";

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO_URI as string)
    .then(() => {
        console.log('✅ Connected to MongoDB Atlas');

        app.listen(process.env.PORT, () => {
            console.log(`🚀 Server is running at http://localhost:${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.error('❌ MongoDB connection error:', err);
    });

app.get('/', (req, res) => {
    res.send('Hello from your Express backend!')
});


