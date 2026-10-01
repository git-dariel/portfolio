import Image from "next/image";
import { ArrowUpRight, ImageIcon } from "lucide-react";

import { portfolio } from "@/config/portfolio";

import { SectionHeading } from "@/components/portfolio/section-heading";
import { ApplicationsCarousel } from "@/components/portfolio/applications-carousel";

export function ApplicationsSection() {
  return (
    <section
      id="applications"
      className="applications-section scroll-mt-28 border-b border-surface-foreground/15 bg-surface px-5 py-12 text-surface-foreground sm:px-8 lg:px-10 xl:scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="01"
          label="Applications"
          title="Applications built for real workflows."
          compact
          inverted
        />

        <ApplicationsCarousel>
          {portfolio.applications.map((application, index) => (
            <article
              key={application.title}
              className="application-card flex min-w-0 snap-start flex-col border-b border-r border-surface-foreground/15"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${portfolio.applications.length}: ${application.title}`}
            >
              <div className="relative aspect-[16/10] shrink-0 overflow-hidden border-b border-surface-foreground/15 bg-surface-muted">
                {application.image ? (
                  <Image
                    src={application.image.src}
                    alt={application.image.alt}
                    fill
                    sizes="(max-width: 767px) calc(100vw - 5rem), (max-width: 1023px) 50vw, 33vw"
                    className="object-contain"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center text-surface-foreground">
                    <ImageIcon className="size-7" aria-hidden="true" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em]">
                      Application preview
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5 lg:p-4">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-surface-foreground">
                    {application.category}
                  </p>
                  <span className="font-mono text-[10px] text-surface-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.045em] lg:mt-2 lg:text-xl lg:leading-6">
                  {application.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-surface-foreground lg:mt-2 lg:leading-5">
                  {application.summary}
                </p>
                <p className="mt-6 font-mono text-[10px] uppercase leading-5 tracking-[0.06em] text-surface-foreground lg:mt-3 lg:leading-4">
                  {application.technologies.join(" / ")}
                </p>

                <div className="mt-auto flex justify-end pt-5 lg:pt-3">
                  {application.demoUrl ? (
                    <a
                      href={application.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex min-h-11 items-center justify-center gap-3 rounded-md border border-surface-foreground bg-surface px-4 py-2 text-sm font-semibold text-surface-foreground no-underline transition-colors hover:bg-surface-foreground hover:text-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-surface-ring active:bg-secondary active:text-secondary-foreground"
                    >
                      View live demo
                      <ArrowUpRight className="size-4 shrink-0 transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" aria-hidden="true" />
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      className="inline-flex min-h-11 items-center text-sm font-semibold text-surface-foreground"
                    >
                      Demo coming soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </ApplicationsCarousel>
      </div>
    </section>
  );
}
