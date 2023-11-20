import BuildHeader from "@/components/header"
import Link from "next/link"
import Image from "next/image"
import { FaGithub } from "react-icons/fa";

export default function BuildElmntriProject(){
    return(
        <div className="flex flex-col items-center">
            <BuildHeader />
            <div className="flex flex-col items-center px-8 sm:w-2/3 gap-4">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-3xl lg:text-4xl">OneMoreDrink.app</h1>
                </div>
                <div className="flex w-full gap-4 flex-col pb-8">
                    <Image src="/images/micronutrient-1.png" height={400} width={800} className="border-8 border-purple-400 rounded-lg"/>
                    <p>
                        I faced a canon event in my life during the summer of 2019. I could stay in Shanghai and accept an offer to work at one of the top law firms,
                        or I could take a leap of faith and move to Taipei to co-found a tourism startup with one of my best friends. 
                    </p>
                    <p>
                        I ended up taking the latter, and I am glad I did because it was where I discovered my love of programming. Our goal was simple. We wanted to create a tourism
                        app and website to help Japanese tourists travel around Taiwan. We had done our market research, and as long as there wasn't a major worldwide pandemic that would decimate global travel, this product would work.
                    </p>
                    <p>
                        We started out creating our product. We made promotional videos and began to plan out our web and mobile app. As I had just left Shanghai, a large portion of my friends were living there.
                        Near the end of 2019, they had begun sending videos of a major virus event sweeping through a city in China. Then, Taiwan shut its borders abruptly.
                    </p>
                    <p>
                        My co-founder and I were pretty far along with our tourism company, but tourism ceased to exisit for the next 2 years. As Taiwan was one of the first to close its borders to outside
                        visitors and implemented two week mandatory quarantine, we watched the world fight over masks and toilet paper from the safety of our unaffected city.
                    </p>
                    <p>
                        As Taipei's restaurants and bars remained untouched, we decided to pivot our company away from tourism and into showcasing local venues, weekly events, and daily specials.
                        It was during this pandemic that OneMoreDrink.app was born.
                    </p>
                    <p>
                        Our goal was simple. We wanted to become the platform that people would visit to find the best restaurants, daily food deals, happy hours, and live performances,
                        and also who local venues would partner with in order to promote their specials and events. We had done our market research, and as long as a New Zealand 
                        pilot that knew he was infected didn't illegally break out of quarantine to visit one of the busiest markets in the city, this product would work.
                    </p>
                </div>
            </div>
        </div>
    )
}