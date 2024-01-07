import mongoose from 'mongoose';

const SudokuSchema = new mongoose.Schema({
  board: {
    type: [[Number]],
    required: true,
  },
});

const SudokuModel = mongoose.model('Sudoku', SudokuSchema);

export default SudokuModel;