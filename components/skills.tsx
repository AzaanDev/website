import Link from "next/link"

import { siteConfig } from "@/config/site"

export function Skills() {
  return (
    <section className="bg-background">
      <div className="pb-10 px-4 mx-auto max-w-4xl ">
        <div className="mx-auto">
          <h2 className="mb-4 text-lg tracking-tight font-extrabold">Skills</h2>
        </div>
        <div className="grid px-3 gap-y-5 md:grid-cols-10 text-[13px]/[16px] text-center">
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
