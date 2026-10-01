import { ArrowUpRight } from "lucide-react";

import { portfolio } from "@/config/portfolio";

import { SectionHeading } from "@/components/portfolio/section-heading";

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-pad scroll-mt-28 bg-surface px-5 text-surface-foreground sm:px-8 lg:px-10 xl:scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="05"
          label="About"
          title="A systems-minded engineer who can work across the stack."
          inverted
        />

        <div className="mt-10 grid gap-10 sm:mt-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="min-w-0 max-w-2xl space-y-5 text-base leading-7 text-surface-foreground">
            <p>
              I’m Dariel, a software engineer based in Mandaluyong City, Philippines. My work
              centers on backend architecture, API integrations, data-driven applications, and the
              infrastructure that gets software safely into production.
            </p>
            <p>
              I’ve contributed to healthcare, insurance, booking, ERP, microfinance, e-commerce, and
              real-estate systems. I also work comfortably with React and Next.js when a project
              needs end-to-end delivery, while keeping backend reliability and maintainability at
              the core.
            </p>
          </div>

          <div className="min-w-0 grid grid-cols-1 border-l border-t border-surface-foreground/15 min-[360px]:grid-cols-2">
            {portfolio.highlights.map((item) => (
              <div key={item.label} className="border-b border-r border-surface-foreground/15 p-5 sm:p-7">
                <p className="text-3xl font-semibold tracking-[-0.055em] sm:text-4xl">
                  {item.value}
                </p>
                <p className="mt-3 max-w-28 text-xs leading-5 text-surface-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-surface-foreground/15 pt-8 sm:mt-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-surface-foreground">
              Open source
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.045em] sm:text-3xl">
              Selected public repositories
            </h3>
          </div>

          <div className="mt-10 border-t border-surface-foreground/15">
            {portfolio.repositories.map((repository, index) => (
              <a
                key={repository.name}
                href={repository.url}
                target="_blank"
                rel="noreferrer"
                className="group grid gap-3 border-b border-surface-foreground/15 py-6 underline-offset-4 hover:underline sm:grid-cols-[48px_.8fr_1.2fr_80px] sm:items-center sm:gap-6"
              >
                <span className="font-mono text-[10px] text-surface-foreground">0{index + 1}</span>
                <h4 className="min-w-0 break-words font-mono text-sm font-semibold">
                  {repository.name}
                </h4>
                <p className="min-w-0 text-sm leading-6 text-surface-foreground">{repository.description}</p>
                <span className="flex items-center justify-start gap-2 font-mono text-[10px] uppercase tracking-[0.08em] text-surface-foreground sm:justify-end">
                  {repository.language}
                  <ArrowUpRight className="size-3" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
