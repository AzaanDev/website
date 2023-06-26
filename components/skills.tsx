import Link from "next/link"

import { siteConfig } from "@/config/site"

export function Skills() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-4xl px-4 pb-10 ">
        <div className="mx-auto">
          <h2 className="mb-4 text-lg font-extrabold tracking-tight">Skills</h2>
        </div>
        <div className="grid gap-y-5 px-3 text-center text-[13px]/[16px] md:grid-cols-10">
          <div>C</div>
          <div>C++</div>
          <div>C#</div>
          <div>TypeScript</div>
          <div>JavaScript</div>
          <div>Go</div>
          <div>Lua</div>
          <div>CSS</div>
          <div>SQL</div>
          <div>React</div>
          <div>Git</div>
          <div>.NET</div>
          <div>ASP.NET</div>
          <div>Express</div>
          <div>Postman</div>
          <div>Docker</div>
          <div>MSSQL</div>
          <div>PostgreSQL</div>
          <div>MongoDB</div>
          <div>Redis</div>
        </div>
      </div>
    </section>
  )
}
