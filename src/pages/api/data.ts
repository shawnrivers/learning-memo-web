import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

const handler = nc<NextApiRequest, NextApiResponse>()
  .get((_, res) => {
    res.send('OK');
  })
  .post((req, res) => {
    res.json({ requestMessage: req.body });
  });

export default handler;
