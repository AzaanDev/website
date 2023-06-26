import Link from "next/link"

import { siteConfig } from "@/config/site"

export function Projects() {
  return (
    <section className="bg-background">
      <div className="py-8 px-4 mx-auto max-w-4xl border-t">
        <div className="mx-autor">
          <h2 className="mb-4 text-lg tracking-tight font-extrabold">
            Projects
          </h2>
        </div>

        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {siteConfig.repos.map((repo) => (
            <div
              key={repo.name}
              className="flex flex-col bg-secondary rounded-md shadow-lg hover:scale-105 transition-all duration-300"
            >
              <a href={repo.html_url} target="_blank">
                <div className="px-5 py-4">
                  <h3 className="text-sm font-bold tracking-tight relative">
                    <strong className="underline underline-offset-4">
                      {repo.name}
                    </strong>
                  </h3>
                  <p className="mt-3 mb-4 font-light text-sm text-popover-foreground">
                    {repo.description}
                  </p>
                  <ul className="flex flex-row gap-3">
                    {repo.languages?.nodes.map((lang) => (
                      <li
                        key={lang.name}
                        className="rounded-sm px-2 py-[2px] text-xs text-black"
                        style={{ backgroundColor: lang.color }}
                      >
                        {lang.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
