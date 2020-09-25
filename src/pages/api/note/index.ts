import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { notes } from '../../../data/data';

const handler = nc<NextApiRequest, NextApiResponse>()
  .get((_, res) => {
    res.json({ data: notes });
  })
  .post((req, res) => {
    const id = Date.now();
    const note = { ...req.body, id };

    notes.push(note);
    res.json({ data: note });
  });

export default handler;
