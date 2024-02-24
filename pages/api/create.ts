// pages/api/create/[id].tsx

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { pages } = req.query;

  if (!pages) {
    return res.status(400).json({ error: 'Missing parameter: pages' });
  }

  res.status(200).json({ message: `Received parameter id: ${pages}` });
}