import Word from "../models/Word.js";
import { Request, Response } from "express";

export async function getRandomWord(req: Request, res: Response) {
    try {
        const randomWord = await Word.aggregate([{$sample: {size: 1}}]);

        if (randomWord.length === 0) {
            res.status(404).json({message: "No words found"});
        } else {
            res.json({ word: randomWord[0].text });
        }
    } catch (err) {
        console.error("Error while fetching random word: " + err);
        res.status(500).json({message: "Internal server error"});
    }
}