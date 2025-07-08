import mongoose from "mongoose";
import dotenv from "dotenv";
import { words } from "./SeedConstants.js";
import Word from "../models/Word.js";
import * as process from "node:process";

dotenv.config();

async function seedDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log('✅ Connected to MongoDB Atlas');

        await Word.deleteMany()
        console.log('🧹 Existing words removed');

        const result = await Word.insertMany(words.map(text => ({text})));
        console.log(`✅ Inserted ${result.length} words`);

        await mongoose.disconnect();
        console.log("🔌 Disconnected from MongoDB");
    } catch (err) {
        console.error('❌ Seeding failed: ' + err)
    }
}

seedDatabase();