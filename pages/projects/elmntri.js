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
                    <h1 className="text-3xl lg:text-4xl">Micronutrient Tracker for Elmntri</h1>
                    <h3 className="flex items-center gap-2"><FaGithub /> <Link href="https://github.com/jakovid/nutrient-tracker">github.com/jakovid/nutrient-tracker</Link></h3>
                </div>
                <div className="flex w-full gap-4 flex-col pb-8">
                    <Image src="/images/micronutrient-1.png" alt="micronutrient dashboard" height={400} width={800} className="border-8 border-purple-400 rounded-lg"/>
                    <p>In early 2023, I was trying my best to secure a full time software engineer role at a company in Taipei to stay close to my partner and friends. 
                        I knew that I needed to move on to a new project in order to grow as a developer, so I started the dreaded job hunt.
                    </p>
                    <p>
                    2023 was not the easiest year to get a new SWE role, especially for someone like myself that came from a non-traditional background. I quickly found out that companies in Taiwan 
                        are quite conservative when it comes to hiring programmers. A CS degree is a must have, and the pay is terrible.
                    </p>
                    <p>
                        Knowing that I wouldn&apos;t be able to find what I wanted with my set of skills and experience at that time, I had decided to focus towards repatriating.
                        A friend of mine knew that I would be open to a short term role, and that is how I ended up meeting the bright minds over at Elmntri.
                    </p>
                    <Image src="/images/micronutrient-2.png" height={400} alt="micronutrient app" width={800} className="border-8 border-purple-400 rounded-lg"/>
                    <p>
                        Elmntri is a start-up studio, with a focus on root cause health. They wanted to create products that helped those who could not get the treatment
                        or results that they needed from medical intervention. They had raised some funding the year before, and they were now looking to start buidling.
                    </p>
                    <p>
                        I was brought on as part of their first cohort of rapid prototypers. Our task was relatively straight forward, but challenging. We were given two weeks
                        to research the industry, find an underserved section of an already niche market, and build a prototype of a product that the studio to hand to an entrepreneur in residence to run with.
                    </p>
                    <Image src="/images/micronutrient-3.png" height={400} width={800} alt="micronutrient app" className="border-8 border-purple-400 rounded-lg"/>
                    <p>
                        I spent the better part of the first week studying the market and reading all of the scientific research in the field that I could. I discovered that 
                        there was a strong focus on micronutrient analysis within the target market, with plenty of scientifically back research on how to combat certain symptoms with increased or decreased micronutrient intake.
                    </p>
                    <p>
                        After discovering this potential underserved area, I began to build out a product that would allow users to track their micronutrient intake by utilizing the USDA 
                        FoodData Central API to create a meal tracker with a heavy focus on micronutrient analysis. After inputing the consumed food, the dashboard would analyze their intake so far.
                    </p>
                    <p>
                        I presented the web app to the startup studio, and they said the product exceeded their expectations. They said that they plan to modify it a bit and use it in the future.
                    </p>
                </div>
            </div>
        </div>
    )
}