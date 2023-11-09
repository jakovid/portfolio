import { getSortedPostsData } from '../../lib/posts';

export default async (req, res) => {
    try {
      const posts = getSortedPostsData();
      res.status(200).json(posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
      res.status(500).json({ error: 'Unable to fetch posts' });
    }
  };