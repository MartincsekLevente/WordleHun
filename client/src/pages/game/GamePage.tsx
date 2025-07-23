import './GamePage.scss';
import Board from "../../components/board/Board.tsx";
import Keyboard from "../../components/keyboard/Keyboard.tsx";
import { useGameController } from "../../hooks/useGameController.ts";
import { GameService } from "../../services/GameService.ts";
import { useEffect, useState } from "react";
import type { Solution } from "../../models/GameModels.ts";

export default function GamePage() {
    const controller = useGameController();
    const [solution, setSolution] = useState<Solution>();

    useEffect(() => {
        let isMounted = true;

        async function loadSolution() {
            try {
                const word = await GameService.getRandomWord();
                if (isMounted) {
                    setSolution(word);
                }
            } catch (error) {
                console.error(error);
            }
        }

        loadSolution();

        return () => {
            isMounted = false;
        }
    }, [])



    return (
        <div className="game-area">
            <Board input={controller.input}/>
            <Keyboard onKeyPress={controller.handleKeyPress}/>
        </div>
    );
}
