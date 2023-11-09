import getFormattedDate from "@/lib/getFormatedData";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { useRouter } from 'next/router';
import BuildHeader from "@/components/header";

export default function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  const pubDate = getFormattedDate(post.date);

  return (
    <main className="prose prose-xl prose-slate flex flex-col w-full items-center">
        <BuildHeader />
        <div className="flex flex-col items-center w-2/3">
            <h1 className="text-4xl font-bold mt-4">{post.title}</h1>
            <p className="mt-0">{pubDate}</p>
            <article className="flex flex-col items-center">
                <section className="flex gap-4 flex-col py-4" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
                <p>
                <Link href="/blog" className="border-white border-2 py-2 px-4 rounded-s-full rounded-e-full hover:bg-purple-400 hover:border-purple-400">
                    View All Blogs
                </Link>
                </p>
            </article>
        </div>
    </main>
  );
}

export async function getStaticProps({ params }) {
  const post = await getPostData(params.blogId);
  if (!post) {
    return { notFound: true };
  }
  return { props: { post } };
}

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


  