export default function BuildHeader(){
    return(
        <header className="border-white border-b-2 p-4 flex justify-between">
            <div>Jacob Dowdle | Full Stack Software Engineer</div>
            <div className="flex gap-3">
                <div className="border-white border-2 w-24 flex justify-center rounded-s-full rounded-e-full cursor-pointer hover:bg-white hover:text-purple-700">Resume</div>
                <div className="border-white border-2 w-24 flex justify-center rounded-s-full rounded-e-full cursor-pointer hover:bg-white hover:text-purple-700">Projects</div>
                <div className="border-white border-2 w-24 flex justify-center rounded-s-full rounded-e-full cursor-pointer hover:bg-white hover:text-purple-700">Blog</div>
                <div className="border-white border-2 w-24 flex justify-center rounded-s-full rounded-e-full cursor-pointer hover:bg-white hover:text-purple-700">Youtube</div>
            </div>
        </header>
    )
}