import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { fakePosts, Post } from '../../../data/posts';

export type GetPostsResponse = {
  data: Post[];
};

const handler = nc<NextApiRequest, NextApiResponse<GetPostsResponse>>().get(
  (_, res) => {
    setTimeout(() => {
      res.json({ data: fakePosts });
    }, 2000);
  }
);

export default handler;
