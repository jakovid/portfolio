export default function BuildResume(){
    return(
        <div className="flex flex-col justify-center items-center ">
            <div className="h-2 w-full bg-purple-400 mt-8"></div>
            <div className="text-4xl font-bold p-8 border-purple-400 border-e-2 w-2/3 flex justify-center bg-gradient-to-r from-transparent to-purple-400">Tech Experience</div>
            <div className="grid grid-cols-3 w-2/3">
                <div className="flex justify-center p-2 bg-purple-400 h-10 rounded-tl-full">
                    SEPTEMBER 2023 - PRESENT
                </div>

                <div className="col-span-2 border-purple-400 border-s-2 border-t-2 ps-4 pt-2 pb-16">
                    <div className="font-bold text-xl">Full Stack Software Engineering Fellow @ Formation (fulltime)</div>
                    <div className="pb-6">Remote | https://formation.dev</div>
                    <div>
                        I was selected for a highly-competitive fellowship at Formation. I received personalized coaching from
                        engineers at Meta, Amazon, Apple, Netflix, Google, and other top-tier companies. I have spent the past
                        few months completing intensive traing to master theoretical computer science topics, such as data structures,
                        algorithms, and system design, through independent study, pair programming, and small mentor-led groups.
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 w-2/3">
                <div className="flex justify-center p-2 bg-purple-400 h-10 rounded-tl-full">
                    AUGUST 2021 - AUGUST 2023
                </div>

                <div className="col-span-2 border-purple-400 border-s-2 ps-4 pt-2 pb-16">
                    <div className="font-bold text-xl">Software Engineer @ Sky Education (contract)</div>
                    <div className="pb-6"> 臺北 (Taipei)  | https://skyeducation.online</div>
                    <div>
                        I designed, developed, and maintained Sky Education's inaugral bilingual website, establishing its first-ever
                        digital footprint to drive business growth and recruit new educators. I generated an impressive annual average 
                        of around 360% lead-to-opening ratio with the website. Additionally, this digital presence acted as a pivotal
                        element to mitigate the annual 17% turnover, resulting in filling 100% of yearly open educator and staff positions.
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 w-2/3">
                <div className="flex justify-center p-2 bg-purple-400 h-10 rounded-tl-full">
                    OCTOBER 2019 - JULY 2021
                </div>
                <div className="col-span-2 border-purple-400 border-s-2 border-b-2 ps-4 pt-2 pb-16 ">
                    <div className="font-bold text-xl">Co-Founder @ OneMoreDrink.app (fulltime)</div>
                    <div className="pb-6"> 臺北 (Taipei)</div>
                    <div>
                        I moved to Taipei to co-found a tourism startup in October 2019. We had done our research and knew that there
                        was an underserved group in the market. Unfortunately, we did not account for a massive pandemic to shut down tourism
                         globally. Luckily we were in Taiwan, where they shut the borders down quickly and we remained relatively untouched by
                        COVID for the first year, so we pivoted into local venue and event promotion through our website and mobile app. 
                        Then a pilot broke out of quarantine in 2021 and we joined the rest of the world. I'll warn everyone the next time 
                        I try to start a company that the industry will likely collapse that year.
                    </div>
                </div>
            </div>


            <div className="text-4xl font-bold p-8 w-2/3 border-purple-400 border-e-2 flex justify-center bg-gradient-to-r from-transparent to-purple-400">Education</div>
            <div className="grid grid-cols-3 w-2/3">
                <div className="flex justify-center p-2 bg-purple-400 h-10 rounded-tl-full">
                    SEPTEMBER 2017 - JUNE 2019
                </div>
                <div className="col-span-2 border-purple-400 border-s-2 border-t-2 border-b-2 ps-4 pt-2 pb-16 ">
                    <div className="font-bold text-xl">Master of Law @ 复旦大学 (Fudan University) (fulltime)</div>
                    <div className="pb-6"> 上海 (Shanghai)</div>
                    <div>
                        I received a Master of Law in Comparative Politics from the School of International Relations and Public Affairs 
                        at Fudan University. Though not a commonly known university in the US, Fudan is one of the top universities in the 
                        world (#31 in 2022). I received a full ride scholarship from the China Scholarship Council (CSC) to pursue my studies. During my enrollment, 
                        I balanced my interest in business and government by focusing heavily on Political Economy, culmintating in my thesis titled 
                        新兴援助国与传统援助国的差异：以中国和美国在非洲的官方援助为例 
                        (Emerging and Traditional Donors in Developing States: The Determinants of Chinese and American Official Financing in Africa)

                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 w-2/3">
            <div className="flex justify-center p-2 bg-purple-400 h-10 rounded-tl-full">
                    AUGUST 2011 - MAY 2014
                </div>
                <div className="col-span-2 border-purple-400 border-s-2 border-t-2 border-b-2 ps-4 pt-2 pb-16 ">
                    <div className="font-bold text-xl">Bachelor of Science in Business @ Miami University (fulltime)</div>
                    <div className="pb-6"> Oxford, OH</div>
                    <div>
                        I graduated with a Bachelor of Science in Business from the Farmer School of Business (FSB) at Miami University and the China Business 
                        Program Certification. At the time of my enrollment, FSB was considered to be one of the top ten public business schools in the United States. 
                        I focused primarily on marketing and international business, specifically in the APAC region. I partook in the Pacific Rim Business Program, where a small group 
                        of students were selected to travel to China, Japan, and South Korea to learn from C-Suite executives working in MNCs. I was then selected 
                        as one of three students to intern in Seoul, South Korea. 
                    </div>
                </div>
            </div>
        </div>
    )
}