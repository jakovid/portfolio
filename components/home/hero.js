import Image from "next/image"

export default function BuildHomeHero(){
    return(
        <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex flex-col justify-center items-center gap-2 p-4">
                <div className="text-6xl text-purple-400">Hey there!</div>
                <div className="text-4xl md:text-6xl">I&apos;m Jacob Dowdle</div>
                <div className="text-sm md:text-lg text-center text-purple-400">a full stack software engineer, world travler, standup comedian, and teacher</div>
            </div>
            <div className="flex gap-8 flex-col-reverse md:flex-row items-center p-4">
                <div className="flex flex-col items-center gap-4">
                    <div className="text-4xl md:text-2xl">The Last Decade</div>
                    <div className="flex flex-col gap-2 md:gap-1">
                        <div className="text-xs sm:text-sm md:text-lg">👨‍🎓 &apos;14: Graduated from <a href="https://miamioh.edu/" className="text-purple-400">Miami University</a>, lived in my 🚘</div>
                        <div className="text-xs sm:text-sm md:text-lg">⚖️ &apos;15: <a href="https://resecon.com/" className="text-purple-400">Legal services</a>, e-commerce, <a href="https://nhm.org/" className="text-purple-400">volunteered</a></div>
                        <div className="text-xs sm:text-sm md:text-lg">🛫 &apos;16: One way ticket to 🇨🇳, <a href="https://www.cninsights.com/" className="text-purple-400">edited industry reports</a></div>
                        <div className="text-xs sm:text-sm md:text-lg">🎓 &apos;17: Fullride scholarship to study <a href="https://sirpa-en.fudan.edu.cn/" className="text-purple-400">foreign aid competition</a></div>
                        <div className="text-xs sm:text-sm md:text-lg">💼 &apos;18: <a href="https://www.amcham-shanghai.org/" className="text-purple-400">Helped 🇺🇸 businesses</a> navigate the Chinese markets</div>
                        <div className="text-xs sm:text-sm md:text-lg">🧋 &apos;19: <a href="https://www.pressreader.com/mongolia/the-ub-post/20190703/281767040773947" className="text-purple-400">Comedy festival</a> in 🇲🇳, tourism <a href="https://www.linkedin.com/company/onemoredrink" className="text-purple-400">startup</a> in Taipei🇹🇼</div>
                        <div className="text-xs sm:text-sm md:text-lg">🍻 &apos;20: Bad year for tourism, pivot to nightlife, <a href="https://zh.wikipedia.org/zh-hans/%E5%8D%9A%E6%81%A9%E5%A4%9C%E5%A4%9C%E7%A7%80" className="text-purple-400">wrote jokes</a></div>
                        <div className="text-xs sm:text-sm md:text-lg">🌐 &apos;21: Bad year for nightlife, closed shop, built a <a href="https://www.skyeducation.online" className="text-purple-400">website</a></div>
                        <div className="text-xs sm:text-sm md:text-lg">🎤 &apos;22: Performed my first headline show, <a href="https://www.youtube.com/watch?v=rA2hdUWgdnc" className="text-purple-400">wrote roasts</a> </div>
                        <div className="text-xs sm:text-sm md:text-lg">🗽 &apos;23: <a href="https://elmntri.com/" className="text-purple-400">Prototyped</a>, returned to 🇺🇸 to join a <a href="https://formation.dev/" className="text-purple-400">fellowship</a></div>
                    </div>
                </div>
                <div className="flex justify-end items-center">
                    <Image 
                        src="/images/jacob.JPG"
                        alt="someone you should hire"
                        width={250}
                        height={250}
                        className="rounded-full"
                    />
                </div>
            </div>
        </div>
    )
}