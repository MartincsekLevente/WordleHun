import './BoardTile.scss';

interface BoardTileProps {
    lineIndex: number,
    tileIndex: number
}

export default function BoardTile({lineIndex, tileIndex}: BoardTileProps) {
    return (
        <div className="board-tile-container"> </div>
    );
}
