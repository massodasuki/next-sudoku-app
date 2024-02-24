const mongoose = require('mongoose');
const cron = require('node-cron');

// pages/index.js

const mongodbUri: string = process.env.MONGODB_URI || 'default-mongodb-uri';
const dbName: string = process.env.DB_NAME || 'default-db-name';

// Connect to MongoDB
mongoose.connect(`${mongodbUri}${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });

// Define Sudoku schema
const sudokuSchema = new mongoose.Schema({
  board: [[Number]], // 2D array to store the Sudoku board
});

// Define Sudoku model
const SudokuModel = mongoose.model('Sudoku', sudokuSchema);

// Function to generate a Sudoku board
function generateSudokuBoard() {
  const board = [];
  for (let i = 0; i < 9; i++) {
    const row = [];
    for (let j = 0; j < 9; j++) {
      row.push((i * 3 + Math.floor(i / 3) + j) % 9 + 1);
    }
    board.push(row);
  }
  return board;
}

// Function to shuffle the Sudoku board
function shuffleSudokuBoard(board: any[]) {
  for (let i = board.length - 1; i > 0; i--) {
    for (let j = board[i].length - 1; j > 0; j--) {
      const randRow = Math.floor(Math.random() * (i + 1));
      const randCol = Math.floor(Math.random() * (j + 1));

      // Swap elements
      [board[i][j], board[randRow][randCol]] = [board[randRow][randCol], board[i][j]];
    }
  }
}

// Function to save a Sudoku board to MongoDB
async function saveSudokuBoardToMongoDB(board: any[]) {
  const sudokuBoard = new SudokuModel({ board });

  try {
    await sudokuBoard.save();
    console.log('Sudoku board saved to MongoDB.');
  } catch (error) {
    console.error('Error saving Sudoku board:', error);
  } finally {
    // Close the MongoDB connection after saving
    // mongoose.disconnect();
  }
}


const Generate = () => {
  const sudokuBoard = generateSudokuBoard();
    shuffleSudokuBoard(sudokuBoard);
    saveSudokuBoardToMongoDB(sudokuBoard);
};

// cron.schedule('* * * * * *', () => {
//   Generate();
// });

export default Generate;
