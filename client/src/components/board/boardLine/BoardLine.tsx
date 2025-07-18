import './BoardLine.scss';
import BoardTile from "./boardTile/BoardTile.tsx";

interface BoardLineProps {
    lineIndex: number;
}

export default function BoardLine({lineIndex}: BoardLineProps) {
    return (
        <div className="board-line-container">
            <BoardTile lineIndex={lineIndex} tileIndex={0}></BoardTile>
            <BoardTile lineIndex={lineIndex} tileIndex={1}></BoardTile>
            <BoardTile lineIndex={lineIndex} tileIndex={2}></BoardTile>
            <BoardTile lineIndex={lineIndex} tileIndex={3}></BoardTile>
            <BoardTile lineIndex={lineIndex} tileIndex={4}></BoardTile>
        </div>
    );
}
