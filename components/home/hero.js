import Image from "next/image"

export default function BuildHomeHero(){
    return(
        <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex flex-col justify-center items-center gap-2">
                <div className="text-6xl">Hey there, I'm Jacob Dowdle</div>
                <div>a full stack software engineer, world travler, standup comedian, and general proponent of learning</div>
            </div>
            <div className="flex gap-8">
                <div>
                    <div className="text-xl">The Last Decade</div>
                    <div>
                        <div>👨‍🎓 '14: Graduated from <a href="https://miamioh.edu/" className="text-purple-400">Miami University</a> jobless, lived in my 🚘</div>
                        <div>⚖️ '15: <a href="https://resecon.com/" className="text-purple-400">Legal services</a>, invested in e-commerce, <a href="https://nhm.org/" className="text-purple-400">volunteered</a></div>
                        <div>🛫 '16: One way ticket to 🇨🇳, <a href="https://www.cninsights.com/" className="text-purple-400">edited industry reports</a></div>
                        <div>🎓 '17: Fullride scholarship to study <a href="https://sirpa-en.fudan.edu.cn/" className="text-purple-400">foreign aid competition</a></div>
                        <div>💼 '18: <a href="https://www.amcham-shanghai.org/" className="text-purple-400">Helped American businesses</a> navigate the Chinese markets</div>
                        <div>🧋 '19: <a href="https://www.pressreader.com/mongolia/the-ub-post/20190703/281767040773947" className="text-purple-400">Comedy festival</a> in 🇲🇳, tourism <a href="https://www.linkedin.com/company/onemoredrink" className="text-purple-400">startup</a> in Taipei</div>
                        <div>🍻 '20: Bad year for tourism, pivoted to nightlife, wrote jokes for <a href="https://zh.wikipedia.org/zh-hans/%E5%8D%9A%E6%81%A9%E5%A4%9C%E5%A4%9C%E7%A7%80" className="text-purple-400">博恩夜夜秀</a></div>
                        <div>🌐 '21: Bad year for nightlife, closed shop, built a <a href="https://www.skyeducation.online" className="text-purple-400">website</a></div>
                        <div>🎤 '22: Performed my first headline show, wrote roasts for <a href="https://www.youtube.com/watch?v=rA2hdUWgdnc" className="text-purple-400">炎上</a> </div>
                        <div>🗽 '23: Helped a <a href="https://elmntri.com/" className="text-purple-400">startup studio</a>, returned to 🇺🇸 to join a <a href="https://formation.dev/" className="text-purple-400">fellowship</a></div>
                    </div>
                </div>
                <div className="flex justify-end items-center">
                    <Image 
                        src="/images/jacob.JPG"
                        width={250}
                        height={250}
                        className="rounded-full"
                    />
                </div>
            </div>
        </div>
    )
}