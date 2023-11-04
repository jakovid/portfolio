import { getPostData } from '../../lib/posts';

export default async (req, res) => {
    try {
      const post = getPostData();
      res.status(200).json(post);
    } catch (error) {
      console.error('Error fetching posts:', error);
      res.status(500).json({ error: 'Unable to fetch posts' });
    }
  };