import BuildHeader from "@/components/header"
import BuildHomeHero from "@/components/home/hero"
import BuildResume from "@/components/home/resume"
import BuildProjects from "@/components/home/projects"

export default function Home() {
  return (
    <main>
      <BuildHeader />
      <BuildHomeHero />
      <BuildResume />
      <BuildProjects />
      
    </main>
  )
}
