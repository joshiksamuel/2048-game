// Create an empty grid
export const generateEmptyBoard = (size) =>
  Array(size)
    .fill(0)
    .map(() => Array(size).fill(0));

// Add a random tile (2 or 4)
export const addRandomTile = (board) => {
  const emptyCells = [];
  board.forEach((row, i) =>
    row.forEach((cell, j) => {
      if (cell === 0) emptyCells.push([i, j]);
    })
  );
  if (emptyCells.length === 0) return;

  const [x, y] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  board[x][y] = Math.random() < 0.9 ? 2 : 4;
};

// Check if 2048 is reached
export const has2048 = (board) =>
  board.some((row) => row.includes(2048));

// Check if moves are possible
export const hasMovesLeft = (board) => {
  const size = board.length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (board[i][j] === 0) return true;
      if (i < size - 1 && board[i][j] === board[i + 1][j]) return true;
      if (j < size - 1 && board[i][j] === board[i][j + 1]) return true;
    }
  }
  return false;
};

// Move and merge tiles
export const moveBoard = (board, direction) => {
  const size = board.length;
  let newBoard = board.map((row) => [...row]);
  let gainedScore = 0;
  let moved = false;

  const rotateRight = (b) => b[0].map((_, i) => b.map((row) => row[i]).reverse());
  const rotateLeft = (b) => b[0].map((_, i) => b.map((row) => row[row.length - 1 - i]));

  // Rotate to make movement logic easier (only move left logic)
  if (direction === "up") newBoard = rotateLeft(newBoard);
  if (direction === "down") newBoard = rotateRight(newBoard);
  if (direction === "right")
    newBoard = newBoard.map((row) => row.reverse());

  // Move left logic
  const processRow = (row) => {
    const filtered = row.filter((n) => n !== 0);
    let merged = [];
    for (let i = 0; i < filtered.length; i++) {
      if (filtered[i] === filtered[i + 1]) {
        merged.push(filtered[i] * 2);
        gainedScore += filtered[i] * 2;
        i++;
      } else {
        merged.push(filtered[i]);
      }
    }
    while (merged.length < size) merged.push(0);
    return merged;
  };

  let movedBoard = newBoard.map((row) => processRow(row));

  // Rotate board back to original direction
  if (direction === "up") movedBoard = rotateRight(movedBoard);
  if (direction === "down") movedBoard = rotateLeft(movedBoard);
  if (direction === "right")
    movedBoard = movedBoard.map((row) => row.reverse());

  moved = JSON.stringify(movedBoard) !== JSON.stringify(board);

  return { newBoard: movedBoard, moved, gainedScore };
};
