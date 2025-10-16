2048 Game — ReactJS Implementation

A fully functional and interactive 2048 game built using ReactJS with a clean and modern GUI interface.
The goal is to combine tiles with the same number to reach 2048!


🧩 Features

✅ Dynamic 4x4 grid board
✅ Keyboard and GUI controls for movement (Up, Down, Left, Right)
✅ Merge logic — identical tiles combine into one with their sum
✅ Random tile spawning (2 or 4 after each move)
✅ Score tracking based on merged tiles
✅ Game Over when no moves are possible
✅ Win detection when the player reaches 2048
✅ Restart option from GUI
✅ Responsive and animated UI

Installation Guide

Follow the steps below to run this project locally 👇

1️⃣ Clone the Repository
git clone https://github.com/<your-username>/react-2048-game.git
cd react-2048-game

2️⃣ Install Dependencies
npm install

3️⃣ Start the Development Server
npm start


Then open your browser and navigate to:

http://localhost:3000

🧠 Gameplay Instructions

🎯 Goal: Combine numbered tiles to reach 2048.

Controls:

⬆️ Up Arrow: Move tiles up

⬇️ Down Arrow: Move tiles down

⬅️ Left Arrow: Move tiles left

➡️ Right Arrow: Move tiles right

Each move:

Slides all tiles in the chosen direction.

Merges tiles with the same number.

Adds a new random tile (2 or 4).

Game ends when:

The 2048 tile is created 🏆 (You win!)

No more moves are possible ❌ (Game over)

🧩 Implementation Details
Board Initialization

The default board size is 4x4.

At the start, two random tiles (either 2 or 4) appear.

Game Mechanics

Movement is handled via keyboard events or GUI controls.

After each valid move:

Tiles merge when adjacent values match.

A new tile (2 or 4) spawns in a random empty position.

Score updates when tiles merge.

Win/lose conditions are checked after each move.



