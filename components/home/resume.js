export default function BuildResume(){
    return(
        <div className="flex flex-col justify-center items-center ">
            <div className="h-2 w-full bg-purple-400 my-8"></div>
            <div className="text-4xl font-bold">Tech Experience</div>
            <div className="grid grid-cols-3 w-2/3">
                <div className="flex justify-center p-2">
                    SEPTEMBER 2023 - PRESENT
                </div>

                <div className="col-span-2 border-purple-400 border-s-2 ps-4 pt-2 pb-16">
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
                <div className="flex justify-center p-2">
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
            <div className="flex justify-center p-2">
                    OCTOBER 2019 - JULY 2021
                </div>
                <div> Co-Founder @ OneMoreDrink.app (fulltime)</div>
            </div>
            <div className="text-4xl font-bold">Education</div>
            <div>
                <div> Master of Law @ Fudan University (fulltime)</div>
            </div>
            <div>
                <div> Bachelor of Science in Business @ Miami University (fulltime)</div>
            </div>
        </div>
    )
}