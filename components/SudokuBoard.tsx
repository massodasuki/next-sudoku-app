import { useEffect, useState } from 'react';
import styles from './SudokuBoard.module.css';

const SudokuBoard: React.FC = () => {
  const [sudokuGrid, setSudokuGrid] = useState<number[][]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getSudoku'); // Adjust the level as needed
        const data = await response.json();
        setSudokuGrid(data.data[0].board);
        // setSudokuGrid(data.data.board); if findOne()
      } catch (error) {
        console.error('Error fetching Sudoku grid:', error);
      }
    };

    fetchData();
  }, []);


return (
    <div className={styles.centered}>
    <div>
      <h1>Sudoku Board</h1>
      <table className={styles.sudokuTable}> {/* Apply the CSS class to the table */}
        <tbody>
          {sudokuGrid.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>{cell !== 0 ? cell : ''}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};


export default SudokuBoard;