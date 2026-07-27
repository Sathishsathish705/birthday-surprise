import puzzleImage from "/photos/puzzle.jpg";

const TILE_SIZE = 120;

export default function PuzzleTile({
  tile,
  index,
  onDragStart,
  onDragOver,
  onDrop,
  completed,
}) {
  return (
    <div
      className="puzzle-tile"
      draggable={!completed}
      onDragStart={(e) => onDragStart(e, index)}
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, index)}
      style={{
  width: `${TILE_SIZE}px`,
  height: `${TILE_SIZE}px`,
  backgroundImage: `url(${puzzleImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: `${TILE_SIZE * 3}px ${TILE_SIZE * 3}px`,
  backgroundPosition: `${-(tile % 3) * TILE_SIZE}px ${-Math.floor(tile / 3) * TILE_SIZE}px`,
}}
    />
  );
}