import './BoardLine.scss';
import BoardTile from "./boardTile/BoardTile.tsx";

interface BoardLineProps {
    lineIndex: number,
    input: string,
}

export default function BoardLine({lineIndex, input}: BoardLineProps) {
    return (
        <div className="board-line-container">
            <BoardTile lineIndex={lineIndex} tileIndex={0} displayChar={input[0]}></BoardTile>
            <BoardTile lineIndex={lineIndex} tileIndex={1} displayChar={input[1]}></BoardTile>
            <BoardTile lineIndex={lineIndex} tileIndex={2} displayChar={input[2]}></BoardTile>
            <BoardTile lineIndex={lineIndex} tileIndex={3} displayChar={input[3]}></BoardTile>
            <BoardTile lineIndex={lineIndex} tileIndex={4} displayChar={input[4]}></BoardTile>
        </div>
    );
}
