import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

const handler = nc<NextApiRequest, NextApiResponse>().post((req, res) => {
  res.json({
    data: req.body,
  });
});

export default handler;
