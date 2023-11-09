import BuildHeader from "@/components/header"
import Posts from "@/components/blog/Posts"

export default function Blog(){
    return(
        <div className="flex flex-col items-center w-full">
            <BuildHeader />
            <Posts />
        </div>
    )
}