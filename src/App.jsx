import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import Controls from "./components/Controls";

const App = () => {
  const [boardSize, setBoardSize] = useState(4);

  const handleSizeChange = (e) => {
    const size = parseInt(e.target.value);
    if (size >= 2 && size <= 8) setBoardSize(size);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-5">
      <h1 className="text-4xl font-bold mb-4">2048 Game</h1>

      <div className="mb-4 flex items-center gap-3">
        <label htmlFor="size">Board Size:</label>
        <input
          id="size"
          type="number"
          min="2"
          max="8"
          value={boardSize}
          onChange={handleSizeChange}
          className="w-16 p-1 text-center bg-gray-800 border border-gray-600 rounded"
        />
      </div>

      <GameBoard size={boardSize} />
      <Controls />
    </div>
  );
};

export default App;
