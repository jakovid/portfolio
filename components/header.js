import Link from "next/link"
import { useRouter } from "next/router"
import { AiFillHome, AiFillProject, AiFillYoutube, AiFillBook } from "react-icons/ai"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function BuildHeader() {
    const { pathname } = useRouter()

    const isHome     = pathname === "/"
    const isProjects = pathname.startsWith("/projects")
    const isBlog     = pathname.startsWith("/blog")

    const navBase   = "border-2 items-center w-12 h-8 sm:w-24 flex justify-center rounded-s-full rounded-e-full cursor-pointer transition-colors"
    const navActive = "border-purple-400 bg-purple-400"
    const navIdle   = "border-white hover:bg-purple-400 hover:border-purple-400"

    return (
        <header className="border-white w-full border-b-2 p-4 flex justify-between items-center">
            <div className="hidden md:flex text-xl w-full items-center gap-2">
                <Link href="/" className="cursor-pointer">Jacob Dowdle</Link>
                {" | "}
                <a href="https://github.com/jakovid" target="_blank"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/jacobdowdle/" target="_blank"><FaLinkedin /></a>
            </div>
            <div className="flex items-center w-full justify-center gap-8 sm:gap-3">
                <Link href="/" className={`${navBase} ${isHome ? navActive : navIdle}`}>
                    <div className="sm:hidden"><AiFillHome /></div>
                    <div className="hidden sm:inline">Home</div>
                </Link>

                <Link href="/projects" className={`${navBase} ${isProjects ? navActive : navIdle}`}>
                    <div className="sm:hidden"><AiFillProject /></div>
                    <div className="hidden sm:inline">Projects</div>
                </Link>

                <Link href="/blog" className={`${navBase} ${isBlog ? navActive : navIdle}`}>
                    <div className="sm:hidden"><AiFillBook /></div>
                    <div className="hidden sm:inline">Blog</div>
                </Link>

                <a
                    href="https://www.youtube.com/@web3idiots"
                    target="_blank"
                    className={`${navBase} ${navIdle}`}
                >
                    <div className="sm:hidden"><AiFillYoutube /></div>
                    <div className="hidden sm:inline">YouTube</div>
                </a>
            </div>
        </header>
    )
}
