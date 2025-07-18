import './Board.scss';
import BoardLine from "./boardLine/BoardLine.tsx";

export default function Board() {

    return (
        <div className="board-table">
            <BoardLine lineIndex={0}></BoardLine>
            <BoardLine lineIndex={1}></BoardLine>
            <BoardLine lineIndex={2}></BoardLine>
            <BoardLine lineIndex={3}></BoardLine>
            <BoardLine lineIndex={4}></BoardLine>
            <BoardLine lineIndex={5}></BoardLine>
        </div>
    );
}
