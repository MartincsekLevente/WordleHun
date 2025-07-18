import './GamePage.scss';
import Board from "../../components/board/Board.tsx";
import Keyboard from "../../components/keyboard/Keyboard.tsx";

export default function GamePage() {
    return (
        <>
            <div className="game-area">
                <Board></Board>
                <Keyboard></Keyboard>
            </div>
        </>
    );
}
