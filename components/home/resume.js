const experience = [
    {
        role: "Applied AI — Agent Optimization",
        company: "Meta",
        dates: "June '26 — Present",
        location: "Remote",
        description: "Building and optimizing AI agent systems on Meta's Applied AI team, focused on reinforcement learning-based agent performance and evaluation infrastructure.",
    },
    {
        role: "Infrastructure — DC Tooling",
        company: "Meta",
        dates: "Oct '25 — May '26",
        location: "Remote",
        description: "Led core feature development on a greenfield DC operations platform consolidating 3 legacy systems into a single source of truth for infrastructure planning and change management. Built dashboards visualizing power, energy, rack capacity, and deployment data across full fleet hierarchies — from region down to server. Partnered with directors, PMs, designers, and data center operators in a high-ambiguity 0→1 environment. Introduced AI-assisted prototyping workflows across 34 contributors, cutting diff landing time by 50% and revision cycles by 30%.",
    },
    {
        role: "Monetization — Developer Experience",
        company: "Meta",
        dates: "Oct '24 — Oct '25",
        location: "Remote",
        description: "Designed and deployed an org-wide migration dashboard used by engineering leadership to track metric adoption and migration health in real time. Built an engineering efficiency analysis tool to quantify productivity loss from merge-conflict-driven codegen revisions. Delivered automation tooling for production config validation, event verification, and metrics pipeline reliability across 3+ cross-functional teams — saving 1,670+ engineering hours annually.",
    },
    {
        role: "Technical Interviewer",
        company: "Scale AI",
        dates: "Jan '24 — May '24",
        location: "Remote",
        description: "Conducted technical interviews and evaluated software engineering candidates, contributing to AI training data quality for coding-related tasks.",
    },
    {
        role: "Full Stack Software Engineering Fellow",
        company: "Formation",
        dates: "Sep '23 — May '24",
        location: "Remote · formation.dev",
        description: "Selected for a highly-competitive fellowship with personalized coaching from engineers at Meta, Amazon, Apple, Netflix, and Google. Completed intensive training in data structures, algorithms, and system design through independent study, pair programming, and mentor-led groups.",
    },
    {
        role: "Software Engineer (contract)",
        company: "Sky Education",
        dates: "Aug '21 — Aug '23",
        location: "臺北 (Taipei) · skyeducation.online",
        description: "Designed, developed, and maintained Sky Education's inaugural bilingual website, establishing its first-ever digital footprint. Generated an annual average of ~360% lead-to-opening ratio and helped fill 100% of yearly open educator and staff positions.",
    },
    {
        role: "Co-Founder",
        company: "OneMoreDrink.app",
        dates: "Oct '19 — Jul '21",
        location: "臺北 (Taipei)",
        description: "Co-founded a tourism startup in Taipei that pivoted into local venue and event promotion during COVID via website and mobile app. Navigated a full pandemic from one of the few places that handled it well — until a pilot broke quarantine in 2021.",
    },
]

const education = [
    {
        role: "Master of Law — Comparative Politics",
        company: "复旦大学 (Fudan University)",
        dates: "Sep '17 — Jun '19",
        location: "上海 (Shanghai)",
        description: "Full-ride scholarship from the China Scholarship Council (CSC). Focused on Political Economy, culminating in a thesis on Chinese and American official financing in Africa: 新兴援助国与传统援助国的差异：以中国和美国在非洲的官方援助为例.",
    },
    {
        role: "Bachelor of Science in Business",
        company: "Miami University",
        dates: "Aug '11 — May '14",
        location: "Oxford, OH · Farmer School of Business",
        description: "Focused on marketing and international business in the APAC region. Participated in the Pacific Rim Business Program, traveling to China, Japan, and South Korea to learn from C-Suite executives. Selected as one of three students to intern in Seoul, South Korea.",
    },
]

function TimelineEntry({ role, company, dates, location, description }) {
    return (
        <div className="relative pl-8 pb-8 group">
            <div className="absolute left-[3px] top-2 w-3 h-3 rounded-full bg-purple-400 ring-2 ring-black group-hover:bg-blue-400 transition-colors" />
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-purple-400/40 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                    <div>
                        <span className="font-bold text-white text-base md:text-lg">{role}</span>
                        <span className="text-purple-400"> @ {company}</span>
                    </div>
                    <span className="text-xs text-purple-300 bg-purple-400/10 border border-purple-400/30 px-2 py-1 rounded-full whitespace-nowrap self-start">
                        {dates}
                    </span>
                </div>
                <div className="text-xs text-gray-500 mb-3">{location}</div>
                <div className="text-sm text-gray-300 leading-relaxed">{description}</div>
            </div>
        </div>
    )
}

export default function BuildResume() {
    return (
        <div className="flex flex-col items-center px-4 py-12 w-full">
            <div className="w-full max-w-4xl flex flex-col gap-12">

                {/* Tech Experience */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <span className="w-1 h-7 bg-purple-400 rounded-full" />
                        <h2 className="text-2xl font-semibold text-white">Tech Experience</h2>
                    </div>
                    <div className="relative">
                        <div className="absolute left-[8px] top-2 bottom-8 w-px bg-purple-400/30" />
                        {experience.map(entry => (
                            <TimelineEntry key={entry.dates} {...entry} />
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <span className="w-1 h-7 bg-purple-400 rounded-full" />
                        <h2 className="text-2xl font-semibold text-white">Education</h2>
                    </div>
                    <div className="relative">
                        <div className="absolute left-[8px] top-2 bottom-8 w-px bg-purple-400/30" />
                        {education.map(entry => (
                            <TimelineEntry key={entry.dates} {...entry} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
