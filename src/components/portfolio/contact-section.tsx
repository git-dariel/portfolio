import { ArrowUpRight } from "lucide-react";

import { portfolio } from "@/config/portfolio";

export function ContactSection() {
  return (
    <section id="contact" className="section-pad bg-background px-5 text-foreground sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-[10px] uppercase leading-5 tracking-[0.1em] text-muted-foreground sm:text-[11px] sm:tracking-[0.12em]">Available for the right engineering challenge</p>
        <div className="mt-8 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <h2 className="contact-title max-w-5xl text-balance font-semibold leading-[0.9] tracking-[-0.075em]">Let’s build something reliable.</h2>
            <p className="mt-7 max-w-2xl text-base leading-7 text-muted">I’m open to conversations about backend systems, platform delivery, DevOps, and software engineering opportunities.</p>
          </div>
          <a href={`mailto:${portfolio.email}`} className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-fit">
            Start a conversation <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
