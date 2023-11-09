import { useState, useEffect } from "react";
import Link from "next/link";

export default function BuildBlog(){
    const [posts, setPosts] = useState([])
    const [displayedPointer, setDisplayedPointer] = useState(0)
    const [displayedPosts, setDisplayedPosts] = useState([])

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

    useEffect(() => {
        handleSetDisplayed()
    }, [posts])

    function handleSetDisplayed(){
        let newDisplayed = []
        let counter = 0

        while(counter < 3 && counter + displayedPointer < posts.length){
            newDisplayed.push(posts[displayedPointer + counter])
            counter++
        }

        setDisplayedPosts(newDisplayed)
    }

    function handleChangeDisplayed(num){
        let newDisplayedPointer = displayedPointer + num
        if (newDisplayedPointer >= posts.length){
            newDisplayedPointer = 0
        }
        if (newDisplayedPointer < 0){
            newDisplayedPointer = posts.length - 4
        }
        console.log("Click!")
        setDisplayedPointer(newDisplayedPointer)
        handleSetDisplayed()
    }

    return(
        <div className="flex flex-col justify-center items-center">
            <div className="h-2 w-full bg-purple-400"></div>
            <div className="text-4xl font-bold p-8">Some Stuff I Wrote</div>
            <div className="pb-8 flex items-center gap-8">
                <div className="w-24 h-24 border-white border-b-2 border-l-8 rotate-45 cursor-pointer hover:border-purple-400" onClick={(e) => {
                    handleChangeDisplayed(-3)
                }}></div>
                {displayedPosts && displayedPosts.map(post => (
                    <Link href={`/blog/${post.id}`} key={post.id} className="flex cursor-pointer bg-purple-400 flex-wrap w-48 h-48 items-center p-4 rounded-md border-white border-2">
                        <div className="text-white text-2xl font-bold">"{post.title}"</div>
                        <div>{post.date}</div>
                    </Link>
                ))}
                <div className="w-24 h-24 border-white border-t-2 border-r-8 rotate-45 cursor-pointer hover:border-purple-400" onClick={(e) => {
                    handleChangeDisplayed(3)
                }}></div>
            </div>
        </div>
    )
}