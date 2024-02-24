// pages/api/create/[id].tsx

import { NextApiRequest, NextApiResponse } from 'next';
import Generate from '@/utils/generate-sudoku';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  Generate();
  res.status(200).json({ message: `Sudoku generated` });
}