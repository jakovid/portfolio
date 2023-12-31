import Image from "next/image"
import Link from "next/link"


export default function BuildProjects(){
    return(
        <div className="flex flex-col justify-center items-center text-center py-12">
            <div className="h-2 w-full bg-purple-400"/>
            <div id="my-projects" className="text-3xl sm:text-4xl font-bold p-8">Clients and Projects</div>
            <div className="flex flex-col md:flex-row gap-8">
                <Link href={'/projects/sky-education'}className="cursor-pointer">
                    <Image 
                        src="/images/sky.jpg"
                        alt="sky logo"
                        width={200}
                        height={150}
                        className="px-4 py-1 bg-white rounded-md"
                    />
                </Link>

                <Link href={'/projects/elmntri'} className="cursor-pointer">
                    <Image 
                        src="/images/elmntri.png"
                        alt="elmntri logo"
                        width={200}
                        height={150}
                        className="px-4 py-1 bg-white rounded-md"
                    />
                </Link>

                <Link href={'/projects/onemoredrink'} className="cursor-pointer">
                    <div className="px-1 py-1 bg-[#f2fb07] rounded-md flex items-center">
                        <div className="text-black px-2 bg-[#f2fb07] h-10 flex items-center text-xl">
                            OneMoreDrink
                        </div>
                        <Image 
                            src="/images/onemoredrink.jpg"
                            alt="one more drink logo"
                            width={40}
                            height={40}
                        />
                        
                    </div>
                    
                </Link>
            </div>
        </div>
    )
}