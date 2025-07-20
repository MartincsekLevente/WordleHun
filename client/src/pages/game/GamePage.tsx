import './GamePage.scss';
import Board from "../../components/board/Board.tsx";
import Keyboard from "../../components/keyboard/Keyboard.tsx";
import { useGameController } from "../../hooks/useGameController.ts";

export default function GamePage() {
    const controller = useGameController();

    return (
        <div className="game-area">
            <Board input={controller.input}/>
            <Keyboard onKeyPress={controller.handleKeyPress} />
        </div>
    );
}
