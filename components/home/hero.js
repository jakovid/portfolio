import Image from "next/image"

export default function BuildHomeHero(){
    const entries = [
        { year: "'14", emoji: "👨‍🎓", text: <>Graduated from <a href="https://miamioh.edu/" className="text-purple-400 hover:underline">Miami University</a>, lived in my 🚘</> },
        { year: "'15", emoji: "⚖️",  text: <><a href="https://resecon.com/" className="text-purple-400 hover:underline">Legal services</a>, e-commerce, <a href="https://nhm.org/" className="text-purple-400 hover:underline">volunteered</a></> },
        { year: "'16", emoji: "🛫",  text: <>One way ticket to 🇨🇳, <a href="https://www.cninsights.com/" className="text-purple-400 hover:underline">edited industry reports</a></> },
        { year: "'17", emoji: "🎓",  text: <>Fullride scholarship to study <a href="https://sirpa-en.fudan.edu.cn/" className="text-purple-400 hover:underline">foreign aid competition</a></> },
        { year: "'18", emoji: "💼",  text: <><a href="https://www.amcham-shanghai.org/" className="text-purple-400 hover:underline">Helped 🇺🇸 businesses</a> navigate the Chinese markets</> },
        { year: "'19", emoji: "🧋",  text: <><a href="https://www.pressreader.com/mongolia/the-ub-post/20190703/281767040773947" className="text-purple-400 hover:underline">Comedy festival</a> in 🇲🇳, tourism <a href="https://www.linkedin.com/company/onemoredrink" className="text-purple-400 hover:underline">startup</a> in Taipei 🇹🇼</> },
        { year: "'20", emoji: "🍻",  text: <>Bad year for tourism, pivot to nightlife, <a href="https://zh.wikipedia.org/zh-hans/%E5%8D%9A%E6%81%A9%E5%A4%9C%E5%A4%9C%E7%A7%80" className="text-purple-400 hover:underline">wrote jokes</a></> },
        { year: "'21", emoji: "🌐",  text: <>Bad year for nightlife, closed shop, built a <a href="https://www.skyeducation.online" className="text-purple-400 hover:underline">website</a></> },
        { year: "'22", emoji: "🎤",  text: <>Performed my first headline show, <a href="https://www.youtube.com/watch?v=rA2hdUWgdnc" className="text-purple-400 hover:underline">wrote roasts</a></> },
        { year: "'23", emoji: "🗽",  text: <><a href="https://elmntri.com/" className="text-purple-400 hover:underline">Prototyped</a>, returned to 🇺🇸 to join a <a href="https://formation.dev/" className="text-purple-400 hover:underline">fellowship</a></> },
        { year: "'24", emoji: "🏢",  text: <>Technical interviewer at Scale AI, joined Meta, welcomed first 👶</> },
        { year: "'25", emoji: "💰",  text: <>Meta Monetization — Developer Experience</> },
        { year: "'26", emoji: "🤖",  text: <>Meta Infrastructure — DC Tooling, Applied AI — Agent Optimization, welcomed second 👶</> },
    ]

    return (
        <div className="flex flex-col justify-center items-center gap-8 px-4 py-8">

            {/* Hero block */}
            <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-4xl">

                {/* Text side */}
                <div className="flex flex-col gap-4 flex-1">
                    <span className="text-sm uppercase tracking-widest text-purple-400">hey there</span>
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        Jacob Dowdle
                    </h1>
                    <div className="flex flex-wrap gap-2">
                        {["Full Stack Engineer", "RL Researcher", "AI-Native Builder"].map(tag => (
                            <span key={tag} className="text-xs md:text-sm px-3 py-1 rounded-full border border-purple-400 text-purple-300">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Photo side */}
                <div className="p-[3px] rounded-full bg-gradient-to-br from-purple-400 to-blue-400 shrink-0">
                    <div className="rounded-full overflow-hidden bg-black">
                        <Image
                            src="/images/jacob.JPG"
                            alt="someone you should hire"
                            width={200}
                            height={200}
                            className="rounded-full"
                        />
                    </div>
                </div>
            </div>

            {/* Journey timeline */}
            <div className="w-full max-w-4xl">
                <h2 className="text-2xl font-semibold mb-6 text-white">My Journey</h2>
                <div className="relative flex flex-col">
                    <div className="absolute left-[52px] top-2 bottom-2 w-px bg-purple-400/30" />
                    {entries.map(({ year, emoji, text }) => (
                        <div key={year} className="relative flex items-start gap-4 py-2 group">
                            <span className="w-10 text-right text-xs text-purple-400 font-mono pt-0.5 shrink-0">{year}</span>
                            <div className="relative z-10 w-3 h-3 mt-1 rounded-full bg-purple-400 shrink-0 ring-2 ring-black group-hover:bg-blue-400 transition-colors" />
                            <div className="text-sm md:text-base text-gray-200 leading-snug">
                                {emoji} {text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
