import { portfolio } from "@/config/portfolio";

import { SectionHeading } from "@/components/portfolio/section-heading";

export function ExpertiseSection() {
  return (
    <section id="expertise" className="section-pad scroll-mt-28 border-y border-black/15 bg-white px-5 text-black sm:px-8 lg:px-10 xl:scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="02"
          label="Technical expertise"
          title="Depth organized by engineering domain."
          description="Frontend is part of the delivery toolkit. Backend, APIs, infrastructure, and reliability remain the center of gravity."
          inverted
        />

        <div className="mt-12 border-t border-black/15 sm:mt-16 lg:mt-20">
          {portfolio.expertise.map((group, index) => (
            <article key={group.title} className="grid gap-5 border-b border-black/15 py-8 sm:grid-cols-[48px_.65fr_1.35fr] sm:gap-8 sm:py-10">
              <span className="font-mono text-[10px] text-black/45">0{index + 1}</span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-black/45">{group.label}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em]">{group.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-black/55">{group.description}</p>
              </div>
              <p className="break-words font-mono text-xs leading-7 text-black/55 sm:pt-5">{group.skills.join(" / ")}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
