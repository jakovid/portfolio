import getFormattedDate from "@/lib/getFormatedData";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { useRouter } from 'next/router';

export default function Post({ post }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  // Format the post date for display
  const pubDate = getFormattedDate(post.date);

  return (
    <main className="px-6 prose prose-xl prose-slate">
      <h1 className="text-3xl mt-4">{post.title}</h1>
      <p className="mt-0">{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        <p>
          <Link href="/blog">
            Back to Blogs
          </Link>
        </p>
      </article>
    </main>
  );
}

// getStaticProps runs at build time in production, and it won't be included in the JS bundle for the browser.
export async function getStaticProps({ params }) {
  const post = await getPostData(params.blogId);
  if (!post) {
    return { notFound: true };
  }
  return { props: { post } };
}

// You also need getStaticPaths if you’re using dynamic routes and getStaticProps.
export async function getStaticPaths() {
  const posts = getSortedPostsData();
  const paths = posts.map((post) => {
    return {
      params: {
        blogId: post.id,
      },
    };
  });

  return { paths, fallback: false };
}


  