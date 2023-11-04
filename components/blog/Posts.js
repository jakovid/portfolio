import { useEffect, useState } from "react"
import ListItem from "./ListItem";

export default function Posts(){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        // Make a GET request to the /api/posts route
        fetch('/api/posts')
          .then((response) => response.json())
          .then((data) => {
            setPosts(data); // Update the state with the fetched data
          })
          .catch((error) => {
            console.error('Error fetching posts:', error);
          });
      }, []); 

    return(
        <section>
            <h2 className="text-4xl font-bold">Blog</h2>
            <ul className="w-full">
                {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
            </ul>
        </section>
    )
}