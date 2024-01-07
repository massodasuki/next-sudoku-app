// components/SudokuBoard.tsx
import React from 'react';

interface SudokuBoardProps {
  puzzle: number[][];
  onChange: (row: number, col: number, value: number) => void;
}

const SudokuBoard: React.FC<SudokuBoardProps> = ({ puzzle, onChange }) => {
  // Implement your Sudoku board component here
  return (
    <div>
      {/* Your Sudoku board JSX here */}
    </div>
  );
};

export default SudokuBoard;
