import BuildHeader from "@/components/header"
import Link from "next/link"
import Image from "next/image"
import { FaGithub } from "react-icons/fa";


export default function BuildSkyEducationProject(){
    return(
        <div className="flex flex-col items-center">
            <BuildHeader />
            <div className="flex flex-col items-center px-8 sm:w-2/3 gap-4">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-3xl lg:text-4xl">Bilingual Website for Sky Education</h1> 
                    <h3 className="flex items-center gap-2"><FaGithub /> <Link href="https://github.com/jakovid/sky-frontend">github.com/jakovid/sky-frontend</Link></h3>
                    <h3 className="flex items-center gap-2"><FaGithub /> <Link href="https://github.com/jakovid/sky-backend">github.com/jakovid/sky-backend</Link></h3>
                </div>
                <div className="flex w-full gap-4 flex-col pb-8 items-center">
                    <Image src="/images/sky-chinese.png" alt="sky education website" height={400} width={800} className="border-8 border-purple-400 rounded-lg"/>
                    <p> In the years leading up to taking on this project, I had been trying my best to keep my tourism startup alive during COVID. In order to do that while the borders were closed, we had to find cash and quickly. I had a friend that worked at an education company, and they were willing to hire me to teach part time.
                        I took that job in order to make enough cash to cover the basic necessities and keep our business afloat while we tried to find our footing. I had sunk too much time and money into it to give up.
                    </p>
                    <p>In 2020, Taiwan was safe. We watched the rest of the world fight over toilet paper and masks, while we more or less went about our days normally. Then one New Zealand pilot
                        thought it was great to break out of quarantine and visit one of the busiest areas in the city because he didn&apos;t think it was a big deal. Tourism, restaurants, and bars closed down, and so did my startup.
                    </p>
                    <p>Luckily, I still was working at the education company. Education was considered essential, so the doors stayed open. It was at this time that the owners of the
                        company were thinking about building their first website. They knew that I had built my startup&apos;s website, so they asked if I would consider doing the same for them.
                        That is how I ended up taking on this project.
                    </p>
                    <p>
                        After having a few meetings with the owners, I told them the best thing to do was to create a website using a content management system (CMS). I was not expecting COVID to stay around too long (lol), and I wanted them 
                        to be able to manage the website in the future when I would leave without needing my help, or without needing to hire someone that may take advantage of their lack of tech knowledge.
                    </p>
                    <Image src="/images/old-sky.png" alt="old sky education website" width={800} height={400} className="border-8 border-purple-400 rounded-lg"/>
                    <p>I gave them a few options, and we ended up opting for Wix. I spent a couple months building out the website, and readjusting it based on what the owners wanted. We eventually got a working site 
                        up and running, which they were happy with for a couple weeks, but it wasn&apos;t quite right. They took pride in their school, and they wanted to represent it in the best way possible. Unfortunately,
                        while Wix&apos;s CMS was incredibly easy to use, it did not allow for the complete customization they had hoped for. As COVID continued to be COVID, we ended up talking again and discussed a more bespoke website.
                    </p>
                    <p>
                        We spent a few more meetings planning out their ideal website, and what they wanted to change or add that Wix didn&apos;t allow them to. I told them that this more bespoke approach would limit their ability to change it
                        without my help, but they were willing to give up that freedom in exchange for a better product. I spent the next couple of months building out a React website for them. We ended up hosting it on GitHub pages because
                        we still owned the web address, and it would save on hosting fees. As a result, I ended up having to swap out the React Router for a Hash Router, as the free version of GitHub Pages only supported single page web apps.
                        The Hash Router allowed me to circumvent this barrier, while giving the user the feeling of switching pages.
                    </p>
                    <p>
                        While this was a better product for them, they still felt that it wasn&apos;t 100 percent the way they wanted it. We talked more, and I realized that they wanted a website that
                        looked nothing like the other school&apos;s that they were competing with. They wanted something cool and modern. I told them I would take a few days, and mock up something that 
                        they might love. This is how we ended up with the final iteration of this project. I built out this new version with React, once again using the Hash Router instead of the React Router, and they were impressed.
                        Visitors could navigate the website across all screen sizes, as I styled it using a mobile first mentality.
                    </p>
                    <Image src="/images/sky-home.png" alt="sky education home page" width={800} height={400} className="border-8 border-purple-400 rounded-lg"/>
                    
                    <p>
                        Near the start of 2023, I knew that I was going to be heading back to the US to pursue a full time role in SWE and wanted to give them the freedom back.
                        I ported the React website over to Next, and began to build out a backend with Node, Express, and MongoDB. After adjusting the frontend to get all of it&apos;s content and images 
                        from the backend, I set out to create a secure admin page for the owners. This admin page would give them CRUD access with certain restrictions. After it&apos;s completion, the owners
                        were able to update all written content, all images on the website, and update their staff memebers. In August 2023, <Link href="https://www.skyeducation.online" className="text-purple-300">Sky Education</Link> was officially handed over to the owners.
                    </p>
                    <Image src="/images/sky-backend.png" alt="sky education admin page" width={800} height={400} className="border-8 border-purple-400 rounded-lg"/>
                </div>
            </div>
        </div>
    )
}