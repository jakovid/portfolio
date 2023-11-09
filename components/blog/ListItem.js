import Link from "next/link"
import getFormattedDate from "@/lib/getFormatedData"

export default function ListItem({ post }){
    const { id, title, date } = post
    const formattedDate = getFormattedDate(date)
    return(
        <li className="mt-4 text-2xl">
            <Link className="underline" href={`/blog/${id}`}>{title}</Link>
            <br />
            <p className="text-sm mt-1">{formattedDate}</p>

        </li>
    )
}