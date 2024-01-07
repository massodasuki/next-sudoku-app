// utils/sudoku.ts
const SIZE = 9;
const SUBGRIDSIZE = 3;

const isValidMove = (board: number[][], row: number, col: number, num: number): boolean => {
  // Check if the number exists in the row and column
  for (let i = 0; i < SIZE; i++) {
    if (board[row][i] === num || board[i][col] === num) {
      return false;
    }
  }

  // Check if the number exists in the subgrid
  const startRow = Math.floor(row / SUBGRIDSIZE) * SUBGRIDSIZE;
  const startCol = Math.floor(col / SUBGRIDSIZE) * SUBGRIDSIZE;
  for (let i = 0; i < SUBGRIDSIZE; i++) {
    for (let j = 0; j < SUBGRIDSIZE; j++) {
      if (board[startRow + i][startCol + j] === num) {
        return false;
      }
    }
  }

  return true;
};

const solveSudoku = (board: number[][]): boolean => {
  for (let row = 0; row < SIZE; row++) {
    for (let col = 0; col < SIZE; col++) {
      if (board[row][col] === 0) {
        for (let num = 1; num <= SIZE; num++) {
          if (isValidMove(board, row, col, num)) {
            board[row][col] = num;

            if (solveSudoku(board)) {
              return true;
            }

            board[row][col] = 0;
          }
        }

        return false;
      }
    }
  }

  return true;
};

const generateSudoku = (): number[][] => {
  // Implement your Sudoku generation logic here
  // For simplicity, let's return an empty board for now
  return Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
};

export { solveSudoku, generateSudoku };
