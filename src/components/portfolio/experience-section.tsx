import { portfolio } from "@/config/portfolio";

import { SectionHeading } from "@/components/portfolio/section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-pad scroll-mt-28 border-y border-black/15 bg-white px-5 text-black sm:px-8 lg:px-10 xl:scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="04"
          label="Experience"
          title="From backend delivery to enterprise cloud systems."
          description="Progressively broader ownership across APIs, platform engineering, technical leadership, deployment, and production support."
          inverted
        />

        <div className="mt-12 border-t border-black/15 sm:mt-16 lg:mt-20">
          {portfolio.experience.map((role, index) => (
            <article key={`${role.company}-${role.role}`} className="grid gap-5 border-b border-black/15 py-9 md:grid-cols-[.45fr_.65fr_1.4fr] md:gap-10 md:py-12">
              <div className="flex items-start gap-3">
                <span className={`mt-1 size-2 rounded-full border border-black/35 ${index === 0 ? "bg-black" : "bg-transparent"}`} />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-black/50">{role.period}</p>
                  {index === 0 ? <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.12em]">Current</p> : null}
                </div>
              </div>
              <div>
                <h3 className="font-semibold">{role.role}</h3>
                <p className="mt-1 text-sm text-black/50">{role.company}</p>
              </div>
              <div>
                <p className="max-w-2xl text-sm leading-7 text-black/60">{role.description}</p>
                <p className="mt-5 break-words font-mono text-[9px] uppercase leading-5 tracking-[0.06em] text-black/45 sm:text-[10px] sm:tracking-[0.08em]">{role.tags.map((tag) => `#${tag}`).join("  ")}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
