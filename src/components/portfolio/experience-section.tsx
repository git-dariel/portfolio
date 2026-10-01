import { portfolio } from "@/config/portfolio";

import { SectionHeading } from "@/components/portfolio/section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-pad scroll-mt-28 border-y border-border bg-background px-5 text-foreground sm:px-8 lg:px-10 xl:scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="04"
          label="Experience"
          title="From backend delivery to enterprise cloud systems."
          description="Progressively broader ownership across APIs, platform engineering, technical leadership, deployment, and production support."
        />

        <div className="mt-12 border-t border-border sm:mt-16 lg:mt-20">
          {portfolio.experience.map((role, index) => (
            <article key={`${role.company}-${role.role}`} className="grid gap-5 border-b border-border py-9 md:grid-cols-[.45fr_.65fr_1.4fr] md:gap-10 md:py-12">
              <div className="flex items-start gap-3">
                <span className={`mt-1 size-2 rounded-full border border-foreground/35 ${index === 0 ? "bg-foreground" : "bg-transparent"}`} />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">{role.period}</p>
                  {index === 0 ? <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em]">Current</p> : null}
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold">{role.role}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{role.company}</p>
              </div>
              <div className="min-w-0">
                <p className="max-w-2xl text-sm leading-7 text-muted">{role.description}</p>
                <p className="mt-5 break-words font-mono text-[10px] uppercase leading-5 tracking-[0.06em] text-muted-foreground sm:tracking-[0.08em]">{role.tags.map((tag) => `#${tag}`).join("  ")}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
