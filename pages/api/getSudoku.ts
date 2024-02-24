
import { NextApiRequest, NextApiResponse } from 'next';
// import { connectToDatabase } from "../../utils/mongodb";
// var Sudoku = require('../../models/SudokuModel.js')


import connectDB from '../../utils/mongodb';
import SudokuModel from '../../models/SudokuModel';

// Connect to MongoDB
// fetchDataFromMongoDB('sudoku');
connectDB();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {

    try {
        // Fetch data from MongoDB
        // const data = await SudokuModel.findOne();
        const data = await SudokuModel.aggregate([
          { $sample: { size: 1 } }
        ]);

        console.log("Sudoku: " + JSON.stringify(data))

        res.status(200).json({ success: true, data });
      } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
      }
  }