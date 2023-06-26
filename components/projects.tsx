import Link from "next/link"

import { siteConfig } from "@/config/site"

export function Projects() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-4xl border-t px-4 py-8">
        <div className="mx-autor">
          <h2 className="mb-4 text-lg font-extrabold tracking-tight">
            Projects
          </h2>
        </div>

        <div className="mb-6 grid gap-8 md:grid-cols-2 lg:mb-16">
          {siteConfig.repos.map((repo) => (
            <div
              key={repo.name}
              className="flex flex-col rounded-md bg-secondary shadow-lg transition-all duration-300 hover:scale-105"
            >
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                <div className="px-5 py-4">
                  <h3 className="relative text-sm font-bold tracking-tight">
                    <strong className="underline underline-offset-4">
                      {repo.name}
                    </strong>
                  </h3>
                  <p className="mb-4 mt-3 text-sm font-light text-popover-foreground">
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
