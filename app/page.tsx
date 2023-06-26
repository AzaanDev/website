import Link from "next/link"

import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"

export default function IndexPage() {
  return (
    <section className="container grid items-center pb-8 pt-6 md:py-10">
      <Skills />
      <Projects />
    </section>
  )
}
