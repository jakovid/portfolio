// pages/api/posts/[id].js
import { getPostData } from '../../../lib/posts';

export default async (req, res) => {
  const { id } = req.query; // Retrieve the post ID from the request query

  try {
    const post = await getPostData(id);
    res.status(200).json(post);
  } catch (error) {
    console.error(`Error fetching post with ID ${id}:`, error);
    res.status(500).json({ error: 'Unable to fetch post' });
  }
};
