import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { fakePosts, Post } from '../../../data/posts';

const getPost = (id: string): Post =>
  fakePosts.find((post) => post.id === parseInt(id, 10));

type Response = {
  data: Post;
};

const handler = nc<NextApiRequest, NextApiResponse<Response>>().get(
  (req, res) => {
    const post = getPost(req.query.id as string);

    if (!post) {
      res.status(404);
      res.end();
      return;
    }

    res.json({ data: post });
  }
);

export default handler;
