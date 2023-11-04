import getFormattedDate from "@/lib/getFormatedData";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateMetaData({ postId }){

    const posts = getSortedPostsData()

    const post = posts.find(post => post.id === postId)

    if (!post){
        return {
            title: 'Post Not Found'
        }
    }

    return{
        title: post.title
    }
}

export default async function Post({ postId }){

    const posts = getSortedPostsData()

    if (!posts.find(post => post.id === postId)){
        return notFound()
    }

    const { title, date, contentHtml } = await getPostData(postId)

    const pubDate = getFormattedDate(date)

    return(
        <main className="px-6 prose prose-xl prose-slate">
            <h1 className="text-3xl mt-4">{title}</h1>
            <p className="mt-0">{pubDate}</p>
            <article>
                <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
                <p>
                    <Link href="/blog">Back to Blogs</Link>
                </p>
            </article>
        </main>
    )
}