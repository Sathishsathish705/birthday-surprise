// =====================================
// PUZZLE SHUFFLE UTILITY
// =====================================

// Correct Puzzle Order
export const correctOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// =====================================
// Shuffle Tiles (Random Order)
// =====================================

export function shuffleTiles() {
  let shuffled = [...correctOrder];

  do {
    shuffled = [...correctOrder];

    // Fisher-Yates Shuffle
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [shuffled[i], shuffled[j]] = [
        shuffled[j],
        shuffled[i],
      ];
    }

  } while (isSolved(shuffled));

  return shuffled;
}

// =====================================
// Check Puzzle Solved
// =====================================

export function isSolved(tiles) {
  for (let i = 0; i < correctOrder.length; i++) {
    if (tiles[i] !== correctOrder[i]) {
      return false;
    }
  }

  return true;
}

// =====================================
// Format Timer
// =====================================

export function formatTime(totalSeconds) {

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return (
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0")
  );

}

// =====================================
// Swap Helper
// =====================================

export function swapTiles(tiles, from, to) {

  const updated = [...tiles];

  [updated[from], updated[to]] = [
    updated[to],
    updated[from],
  ];

  return updated;

}