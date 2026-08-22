import Image from "next/image";
import { ArrowDown } from "lucide-react";

import { portfolio } from "@/config/portfolio";

import { ResumeDialog } from "@/components/portfolio/resume-dialog";

export function HeroSection() {
  return (
    <section id="top" className="scroll-mt-28 border-b border-border bg-white text-black xl:scroll-mt-20">
      <div className="hero-shell mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex items-start gap-2 border-b border-black/15 py-3.5 font-mono text-[9px] uppercase leading-5 tracking-[0.1em] text-black/55 sm:items-center sm:py-4 sm:text-[10px] sm:tracking-[0.12em]">
          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-black sm:mt-0" />
          <span>Advanced App Engineering Sr. Analyst · Accenture</span>
        </div>

        <div className="hero-stage grid min-h-0 gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="relative z-10">
            <p className="font-mono text-[10px] uppercase leading-5 tracking-[0.11em] text-black/55 sm:text-xs sm:tracking-[0.14em]">
              Backend Engineering / APIs / DevOps / AWS
            </p>
            <h1 className="hero-title mt-5 max-w-4xl text-balance font-semibold leading-[0.92] tracking-[-0.075em] sm:mt-6">
              I build <span className="scribble-circle">systems</span> that survive the real world.
            </h1>
            <p className="hero-copy mt-6 max-w-2xl text-base leading-7 text-black/65 sm:text-lg sm:leading-8">
              I design, integrate, deploy, and troubleshoot backend systems—turning product requirements into reliable APIs and cloud delivery workflows.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#work" className="inline-flex min-h-12 items-center justify-center gap-2 bg-black px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                View engineering work
                <ArrowDown className="size-4" />
              </a>
              <ResumeDialog />
            </div>
          </div>

          <div className="hero-art relative hidden min-h-0 items-end justify-center overflow-hidden lg:flex">
            <Image
              src="/illustrations/dariel-engineering.png"
              alt="Hand-drawn software engineer holding a laptop and coffee beside backend and cloud symbols"
              width={1024}
              height={1536}
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="hero-illustration h-auto w-auto max-w-full object-contain object-bottom mix-blend-multiply"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-black/15 py-4 font-mono text-[9px] uppercase tracking-[0.1em] text-black/50 sm:gap-x-8 sm:text-[10px] sm:tracking-[0.12em]">
          {portfolio.coreTechnologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
