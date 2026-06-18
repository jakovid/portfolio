import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"
import BuildHeader from "@/components/header"

export async function getStaticProps() {
    const postsDir = path.join(process.cwd(), "blogposts")
    const files = fs.readdirSync(postsDir)

    const posts = files
        .filter(f => f.endsWith(".md"))
        .map(filename => {
            const slug = filename.replace(".md", "")
            const raw = fs.readFileSync(path.join(postsDir, filename), "utf8")
            const { data } = matter(raw)
            return { slug, title: data.title, date: data.date }
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date))

    return { props: { posts } }
}

export default function Blog({ posts }) {
    return (
        <main>
            <BuildHeader />
            <div className="flex flex-col items-center px-4 py-12 w-full">
                <div className="w-full max-w-4xl">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="w-1 h-7 bg-purple-400 rounded-full" />
                        <h1 className="text-2xl font-semibold text-white">Blog</h1>
                    </div>
                    {posts.length === 0 ? (
                        <div className="rounded-xl border border-white/10 bg-white/5 p-10 flex flex-col items-center gap-3 text-center">
                            <span className="text-4xl">✍️</span>
                            <p className="text-white font-semibold text-lg">Posts coming soon</p>
                            <p className="text-gray-400 text-sm">Working on it — check back shortly.</p>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4">
                            {posts.map(({ slug, title, date }) => (
                                <Link key={slug} href={`/blog/${slug}`}>
                                    <div className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-purple-400/40 transition-colors group cursor-pointer">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                            <span className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                                                {title}
                                            </span>
                                            <span className="text-xs text-purple-300 bg-purple-400/10 border border-purple-400/30 px-2 py-1 rounded-full whitespace-nowrap self-start">
                                                {new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}
