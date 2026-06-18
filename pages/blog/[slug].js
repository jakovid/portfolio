import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import BuildHeader from "@/components/header"
import Link from "next/link"

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join(process.cwd(), "blogposts"))
    const paths = files
        .filter(f => f.endsWith(".md"))
        .map(f => ({ params: { slug: f.replace(".md", "") } }))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const raw = fs.readFileSync(
        path.join(process.cwd(), "blogposts", `${params.slug}.md`),
        "utf8"
    )
    const { data, content } = matter(raw)
    const processed = await remark().use(html).process(content)

    return {
        props: {
            title: data.title,
            date: data.date,
            contentHtml: processed.toString(),
        },
    }
}

export default function BlogPost({ title, date, contentHtml }) {
    return (
        <main>
            <BuildHeader />
            <div className="flex flex-col items-center px-4 py-12 w-full">
                <div className="w-full max-w-3xl">
                    <Link href="/blog" className="text-sm text-purple-400 hover:underline mb-8 inline-block">
                        ← Back to blog
                    </Link>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="w-1 h-7 bg-purple-400 rounded-full" />
                        <h1 className="text-2xl md:text-3xl font-semibold text-white">{title}</h1>
                    </div>
                    <p className="text-xs text-purple-300 mb-10 ml-4">
                        {new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </p>
                    <div
                        className="prose prose-invert prose-purple max-w-none"
                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                    />
                </div>
            </div>
        </main>
    )
}
