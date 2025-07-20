import './Board.scss';
import BoardLine from "./boardLine/BoardLine.tsx";

interface BoardProps {
    input: string[],
}

export default function Board({input}: BoardProps) {

    return (
        <div className="board-table">
            <BoardLine lineIndex={0} input={input.join("")}></BoardLine>
            <BoardLine lineIndex={1} input={""}></BoardLine>
            <BoardLine lineIndex={2} input={""}></BoardLine>
            <BoardLine lineIndex={3} input={""}></BoardLine>
            <BoardLine lineIndex={4} input={""}></BoardLine>
            <BoardLine lineIndex={5} input={""}></BoardLine>
        </div>
    );
}
