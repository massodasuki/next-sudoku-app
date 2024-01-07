// pages/api/generateGrid.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
    const sudokuGrid = generateSudokuGrid();
    res.status(200).json({ grid: sudokuGrid });
  }


// // Function to generate a Sudoku grid (replace with your own logic)
// function generateSudokuGrid() {
//   // Implement your Sudoku grid generation logic here
//   // This is just a placeholder, you may use a Sudoku-solving algorithm
//   return [
//     [5, 3, 0, 0, 7, 0, 0, 0, 0],
//     [6, 0, 0, 1, 9, 5, 0, 0, 0],
//     [0, 9, 8, 0, 0, 0, 0, 6, 0],
//     [8, 0, 0, 0, 6, 0, 0, 0, 3],
//     [4, 0, 0, 8, 0, 3, 0, 0, 1],
//     [7, 0, 0, 0, 2, 0, 0, 0, 6],
//     [0, 6, 0, 0, 0, 0, 2, 8, 0],
//     [0, 0, 0, 4, 1, 9, 0, 0, 5],
//     [0, 0, 0, 0, 8, 0, 0, 7, 9]
//   ];
// };

// Function to generate a random and valid Sudoku grid
function generateSudokuGrid() {
    const emptyGrid: number[][] = Array.from({ length: 9 }, () => Array(9).fill(0));
    fillGrid(emptyGrid);
    return emptyGrid;
  }
  
  // Helper function to check if a number can be placed in a specific position
  function isValid(grid: number[][], row: number, col: number, num: number): boolean {
    // Check if the number is not present in the current row and column
    for (let i = 0; i < 9; i++) {
      if (grid[row][i] === num || grid[i][col] === num) {
        return false;
      }
    }
  
    // Check if the number is not present in the current 3x3 subgrid
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (grid[startRow + i][startCol + j] === num) {
          return false;
        }
      }
    }
  
    return true;
  }
  
//   // Recursive function to fill the Sudoku grid using backtracking
//   function fillGrid(grid: number[][]): boolean {
//     for (let row = 0; row < 9; row++) {
//       for (let col = 0; col < 9; col++) {
//         if (grid[row][col] === 0) {
//           for (let num = 1; num <= 9; num++) {
//             if (isValid(grid, row, col, num)) {
//               grid[row][col] = num;
  
//               if (fillGrid(grid)) {
//                 return true;
//               }
  
//               grid[row][col] = 0;
//             }
//           }
//           return false; // No valid number found for this position
//         }
//       }
//     }
//     return true; // Grid filled successfully
//   }

  // Recursive function to fill the Sudoku grid using backtracking
function fillGrid(grid: number[][]): boolean {
    const emptyPositions: { row: number; col: number }[] = [];
  
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (grid[row][col] === 0) {
          emptyPositions.push({ row, col });
        }
      }
    }
  
    // Shuffle the empty positions to make the order random
    for (let i = emptyPositions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [emptyPositions[i], emptyPositions[j]] = [emptyPositions[j], emptyPositions[i]];
    }
  
    return fillGridRecursive(grid, emptyPositions);
  }
  
  function fillGridRecursive(grid: number[][], emptyPositions: { row: number; col: number }[]): boolean {
    if (emptyPositions.length === 0) {
      return true; // All cells filled successfully
    }
  
    const { row, col } = emptyPositions.pop()!;
  
    for (let num = 1; num <= 9; num++) {
      if (isValid(grid, row, col, num)) {
        grid[row][col] = num;
  
        if (fillGridRecursive(grid, emptyPositions)) {
          return true;
        }
  
        grid[row][col] = 0;
      }
    }
  
    emptyPositions.push({ row, col }); // If no valid number is found, backtrack
    return false;
  }