import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { fakePosts, Post } from '../../../data/posts';

type Response = {
  data: Post[];
};

const handler = nc<NextApiRequest, NextApiResponse<Response>>().get(
  (_, res) => {
    res.json({ data: fakePosts });
  }
);

export default handler;
