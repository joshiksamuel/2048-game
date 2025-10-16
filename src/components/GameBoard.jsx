import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import { generateEmptyBoard, addRandomTile, moveBoard, has2048, hasMovesLeft } from "../utils";
import "../App.css";

const GameBoard = ({ size }) => {
  const [board, setBoard] = useState(generateEmptyBoard(size));
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  // Initialize board
  useEffect(() => {
    const newBoard = generateEmptyBoard(size);
    addRandomTile(newBoard);
    addRandomTile(newBoard);
    setBoard([...newBoard]);
    setScore(0);
    setGameOver(false);
    setWin(false);
  }, [size]);

  // Handle movement (keyboard + GUI)
  const handleKeyDown = (e) => {
    if (gameOver || win) return;
    let direction = null;

    switch (e.key) {
      case "ArrowUp":
        direction = "up";
        break;
      case "ArrowDown":
        direction = "down";
        break;
      case "ArrowLeft":
        direction = "left";
        break;
      case "ArrowRight":
        direction = "right";
        break;
      default:
        return;
    }

    makeMove(direction);
  };

  // Attach event listener
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  // Make a move
  const makeMove = (direction) => {
    const { newBoard, moved, gainedScore } = moveBoard(board, direction);
    if (moved) {
      addRandomTile(newBoard);
      setBoard([...newBoard]);
      setScore(score + gainedScore);

      if (has2048(newBoard)) {
        setWin(true);
      } else if (!hasMovesLeft(newBoard)) {
        setGameOver(true);
      }
    }
  };

  // Restart game
  const restartGame = () => {
    const newBoard = generateEmptyBoard(size);
    addRandomTile(newBoard);
    addRandomTile(newBoard);
    setBoard([...newBoard]);
    setScore(0);
    setGameOver(false);
    setWin(false);
  };

  return (
    <div className="game-container">
      <div className="score">Score: {score}</div>

      <div
        className="board"
        style={{
          gridTemplateColumns: `repeat(${size}, 80px)`,
          gridTemplateRows: `repeat(${size}, 80px)`,
        }}
      >
        {board.map((row, i) =>
          row.map((cell, j) => <Tile key={`${i}-${j}`} value={cell} />)
        )}
      </div>

      {win && <p className="game-over">🎉 You reached 2048! You win!</p>}
      {gameOver && <p className="game-over">😢 No more moves. Game Over!</p>}

      <div className="controls">
        <button onClick={() => makeMove("up")}>⬆️</button>
        <div>
          <button onClick={() => makeMove("left")}>⬅️</button>
          <button onClick={() => makeMove("right")}>➡️</button>
        </div>
        <button onClick={() => makeMove("down")}>⬇️</button>
      </div>

      <button onClick={restartGame}>Restart Game</button>
    </div>
  );
};

export default GameBoard;
