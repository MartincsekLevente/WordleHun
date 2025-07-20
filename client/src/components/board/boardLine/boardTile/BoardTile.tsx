import './BoardTile.scss';

interface BoardTileProps {
    lineIndex: number,
    tileIndex: number,
    displayChar: string,
}

export default function BoardTile({lineIndex, tileIndex, displayChar}: BoardTileProps) {
    return (
        <div className="board-tile-container">
            {displayChar}
        </div>
    );
}
