import type { Solution } from "../models/GameModels.ts";

export class GameService {
    static async getRandomWord(): Promise<Solution> {
        const response = await fetch("http://localhost:3001/api/random-word");

        if(!response.ok) {
            throw new Error("Failed to fetch the random word!");
        }

        return await response.json();
    }
}
