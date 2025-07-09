import express from "express";
import { getRandomWord } from "../controllers/wordController.js";

const router = express.Router();

router.get("/random-word", getRandomWord);

export default router;