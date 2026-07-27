import PuzzleTile from "./PuzzleTile";
import { isSolved } from "../utils/shuffle";

export default function PuzzleBoard({
  tiles,
  setTiles,
  setMoves,
  completed,
  setCompleted,
}) {

  const handleDragStart = (e, index) => {
    if (completed) return;

    e.dataTransfer.setData("tileIndex", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();

    if (completed) return;

    const dragIndex = Number(
      e.dataTransfer.getData("tileIndex")
    );

    if (
      Number.isNaN(dragIndex) ||
      dragIndex === dropIndex
    ) {
      return;
    }

    const updated = [...tiles];

    // Swap Tiles
    [updated[dragIndex], updated[dropIndex]] = [
      updated[dropIndex],
      updated[dragIndex],
    ];

    // Update Puzzle
    setTiles(updated);

    // Update Moves
    setMoves((prev) => prev + 1);

    // Puzzle Completed
    if (isSolved(updated)) {

      setCompleted(true);

    }
  };

  return (
    <div className="board">
      {tiles.map((tile, index) => (
        <PuzzleTile
          key={index}
          tile={tile}
          index={index}
          completed={completed}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        />
      ))}
    </div>
  );
}