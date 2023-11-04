import Link from "next/link"

export default function BuildHeader(){
    return(
        <header className="border-white w-full border-b-2 p-4 flex justify-between">
            <div>Jacob Dowdle | Full Stack Software Engineer</div>
            <div className="flex gap-3">
                <Link href="/" className="border-white border-2 w-24 flex justify-center rounded-s-full rounded-e-full cursor-pointer hover:bg-purple-400 hover:border-purple-400">Home</Link>
                <Link href="/projects" className="border-white border-2 w-24 flex justify-center rounded-s-full rounded-e-full cursor-pointer hover:bg-purple-400 hover:border-purple-400">Projects</Link>
                <Link href="/blog" className="border-white border-2 w-24 flex justify-center rounded-s-full rounded-e-full cursor-pointer hover:bg-purple-400 hover:border-purple-400">Blog</Link>
                <Link href="/youtube" className="border-white border-2 w-24 flex justify-center rounded-s-full rounded-e-full cursor-pointer hover:bg-purple-400 hover:border-purple-400">Youtube</Link>
            </div>
        </header>
    )
}