import { portfolio } from "@/config/portfolio";

import { SectionHeading } from "@/components/portfolio/section-heading";

export function CaseStudiesSection() {
  return (
    <section id="work" className="section-pad scroll-mt-28 px-5 sm:px-8 lg:px-10 xl:scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="01"
          label="Selected work"
          title="Engineering outcomes, not just screenshots."
          description="Backend, API, and cloud delivery work presented through problems, decisions, and results. Company and client details are generalized where confidentiality applies."
        />

        <div className="mt-12 border-t border-border sm:mt-16 lg:mt-20">
          {portfolio.caseStudies.map((study, index) => (
            <article key={study.title} className="grid gap-8 border-b border-border py-10 sm:py-12 lg:grid-cols-[.35fr_1.65fr] lg:gap-14 lg:py-16">
              <div>
                <p className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")} / {study.domain}</p>
                <p className="mt-6 text-3xl font-semibold tracking-[-0.055em] sm:mt-8 sm:text-4xl">{study.outcome}</p>
                <p className="mt-2 max-w-48 text-xs leading-5 text-muted-foreground">{study.outcomeLabel}</p>
              </div>

              <div>
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <h3 className="max-w-2xl text-2xl font-semibold tracking-[-0.045em] sm:text-4xl">{study.title}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">{study.scope}</span>
                </div>
                <p className="mt-7 max-w-3xl text-base leading-7 text-muted">{study.summary}</p>

                <div className="mt-8 grid gap-8 border-t border-border pt-7 sm:mt-10 sm:grid-cols-2 sm:gap-9">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">Engineering focus</p>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-300">
                      {study.focus.map((item) => (
                        <li key={item} className="grid grid-cols-[14px_1fr] gap-2"><span aria-hidden="true">—</span><span>{item}</span></li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">Stack & systems</p>
                    <p className="mt-4 font-mono text-xs leading-7 text-zinc-400">{study.technologies.join(" / ")}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
