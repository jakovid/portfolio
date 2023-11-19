import BuildHeader from "@/components/header"
import Link from "next/link"

export default function BuildSkyEducationProject(){
    return(
        <div className="flex flex-col items-center">
            <BuildHeader />
            <div className="flex flex-col items-center px-8 sm:w-2/3 gap-4">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl lg:text-4xl">Project: Sky Education</h1>
                    <h3>Taipei, Taiwan (臺北市)</h3>
                    <h3>August 2021 - August 2023</h3>
                </div>
                <div className="flex w-full gap-4 flex-col">
                    <p>In the years leading up to taking on this project, I had been trying my best to keep my company alive. I moved to Taiwan to start a
                        tourism company in late 2019, which in hindsight was not the best time to open a tourism company. I had sunk the better part of my savings
                        into starting the tourism company, opting to take the bootstrap route.
                    </p>
                    <p>
                        I had just left Shanghai, so I had a large number of friends still living in China.
                            In late 2019, I started getting messages from my friends about these crazy videos starting to circulate around on WeChat of a virus taking over a city.
                            We were still pushing along with our tourism company, trying to get it off the ground when Taiwan shut its borders to the outside world. I had burnt through
                            almost all of my money at this point. Then the world went crazy.
                    </p>
                    <p>In order to keep the company alive, we had to find cash and quickly. I had a friend that worked at an education company, and they were willing to hire me to teach part time.
                        I took that job in order to make enough cash to cover the basic necessities and keep our business afloat while we tried to find our footing. I had sunk too much time and money into it to give up.
                    </p>
                    <p>In 2020, Taiwan was safe. We watched the rest of the world fight over toilet paper and masks, while we more or less went about our days normally. Then one New Zealand pilot
                        thought it was great to break out of quarantine and visit one of the busiest areas in the city because he didn't think it was a big deal. Tourism, restaurants, and bars closed down, and so did my startup.
                    </p>
                    <p>Luckily, I still was working at the education company. Education was considered essential, so the doors stayed open. It was at this time that the owners of the
                        company were thinking about building their first website. They knew that I had built my startup's website, so they asked if I would consider doing the same for them.
                        That is how I ended up taking on this project.
                    </p>
                    <p>
                        After having a few meetings with the owners, I told them the best thing to do was to create a website using a content management system (CMS). I was not expecting COVID to stay around too long (lol), and I wanted them 
                        to be able to manage the website in the future when I would leave without needing my help, or without needing to hire someone that may take advantage of their lack of tech knowledge.
                    </p>
                    <p>I gave them a few options, and we ended up opting for Wix. I spent a couple months building out the website, and readjusting it based on what the owners wanted. We eventually got a working site 
                        up and running, which they were happy with for a couple weeks, but it wasn't quite right. They took pride in their school, and they wanted to represent it in the best way possible. Unfortunately,
                        while Wix's CMS was incredibly easy to use, it did not allow for the complete customization they had hoped for. As COVID continued to be COVID, we ended up talking again and discussed a more bespoke website.
                    </p>
                    <p>
                        We spent a few more meetings planning out their ideal website, and what they wanted to change or add that Wix didn't allow them to. I told them that this more bespoke approach would limit their ability to change it
                        without my help, but they were willing to give up that freedom in exchange for a better product. I spent the next couple of months building out a React website for them. We ended up hosting it on GitHub pages because
                        we still owned the web address, and it would save on hosting fees. As a result, I ended up having to swap out the React Router for a Hash Router, as the free version of GitHub Pages only supported single page web apps.
                        The Hash Router allowed me to circumvent this barrier, while giving the user the feeling of switching pages.
                    </p>
                    <p>
                        While this was a better product for them, they still felt that it wasn't 100 percent the way they wanted it. We talked more, and I realized that they wanted a website that
                        looked nothing like the other school's that they were competing with. They wanted something cool and modern. I told them I would take a few days, and mock up something that 
                        they might love. This is how we ended up with the final iteration of this project. I built out the original version with React, once again using the Hash Router instead of the React Router, and they were impressed.
                    </p>
                    <p>
                        Near the start of 2023, I knew that I was going to be heading back to the US to pursue a full time role in SWE and wanted to give them the freedom back.
                        I ported the React website over to Next, and began to build out a backend with Node, Express, and MongoDB. After adjusting the frontend to get all of it's content and images 
                        from the backend, I set out to create a secure admin page for the owners. This admin page would give them CRUD access with certain restrictions. After it's completion, the owners
                        were able to update all written content, all images on the website, and update their staff memebers. In August 2023, <Link href="https://www.skyeducation.online" className="text-purple-300">Sky Education</Link> was officially handed over to the owners.
                    </p>
                </div>
            </div>
        </div>
    )
}