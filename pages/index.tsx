// pages/index.tsx
import { useEffect, useState } from 'react';
import SudokuBoard from '../components/SudokuBoard';
import { generateSudoku, solveSudoku } from '../utils/sudoku';

const Home: React.FC = () => {
  const [puzzle, setPuzzle] = useState<number[][]>([]);

  useEffect(() => {
    const newPuzzle = generateSudoku();
    solveSudoku(newPuzzle); // Solve the generated puzzle
    setPuzzle(newPuzzle);
  }, []);

  const handleCellChange = (row: number, col: number, value: number) => {
    // Handle cell value change
    // You can implement validation or any other logic here
    // For simplicity, we'll just update the puzzle directly
    const newPuzzle = [...puzzle];
    newPuzzle[row][col] = value;
    setPuzzle(newPuzzle);
  };

  return (
    <div>
      <h1>Sudoku App</h1>
      <SudokuBoard puzzle={puzzle} onChange={handleCellChange} />
    </div>
  );
};

export default Home;
