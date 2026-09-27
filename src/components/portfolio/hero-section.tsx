import Image from "next/image";
import { ArrowDown, Briefcase, Lightbulb, Network } from "lucide-react";

import { ResumeDialog } from "@/components/portfolio/resume-dialog";

export function HeroSection() {
  return (
    <section
      id="top"
      className="scroll-mt-28 border-b border-border bg-white text-black xl:scroll-mt-20"
    >
      <div className="hero-shell mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* <div className="flex items-start gap-2 border-b border-black/15 py-3.5 font-mono text-[10px] uppercase leading-5 tracking-[0.1em] text-black sm:items-center sm:py-4 sm:text-[11px] sm:tracking-[0.12em]">
          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-black sm:mt-0" />
          <span>Advanced App Engineering Sr. Analyst · Accenture</span>
        </div> */}

        <div className="hero-stage grid min-h-0 gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="relative z-10">
            <p className="font-mono text-[10px] uppercase leading-5 tracking-[0.11em] text-black sm:text-xs sm:tracking-[0.14em]">
              Backend Engineering / APIs / DevOps / AWS
            </p>
            <h1 className="hero-title mt-5 max-w-4xl text-balance font-semibold leading-[0.92] tracking-[-0.075em] sm:mt-6">
              I build <span className="scribble-circle">systems</span> that survive the real world.
            </h1>
            <p className="hero-copy mt-6 max-w-2xl text-base leading-7 text-black sm:text-lg sm:leading-8">
              I design, integrate, deploy, and troubleshoot backend systems—turning product
              requirements into reliable APIs and cloud delivery workflows.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#applications"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-black px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                View applications
                <ArrowDown className="size-4" />
              </a>
              <ResumeDialog />
            </div>
          </div>

          <div className="hero-art relative flex min-h-0 items-end justify-center overflow-visible lg:justify-end">
            <div className="relative w-full max-w-[21rem] py-9 sm:max-w-[25rem] sm:py-10 lg:max-w-[min(32rem,56svh)] lg:py-8">
              <div
                aria-hidden="true"
                className="absolute inset-x-2 top-9 bottom-9 translate-x-2 translate-y-2 rounded-[2rem] border border-black/25 sm:inset-x-5 sm:top-10 sm:bottom-10 lg:inset-x-6 lg:top-8 lg:bottom-8"
              />

              <div className="relative mx-2 aspect-[4/5] overflow-hidden rounded-[2rem] border border-black/15 bg-zinc-100 sm:mx-5 lg:mx-6">
                <Image
                  src="/illustrations/me.png"
                  alt="Portrait of Dariel Avila"
                  fill
                  priority
                  sizes="(max-width: 639px) calc(100vw - 3.5rem), (max-width: 1023px) 22rem, min(29rem, calc(56svh - 3rem))"
                  className="object-cover object-[center_28%]"
                />
              </div>

              <ul className="pointer-events-none absolute inset-0 z-10 font-mono">
                <li className="absolute left-0 top-0 flex min-h-14 items-center gap-2.5 rounded-2xl border border-black/10 bg-white px-3 py-2.5 text-black shadow-[0_16px_40px_rgb(0_0_0/0.16)] sm:gap-3 sm:px-4">
                  <Briefcase className="size-4 shrink-0 sm:size-5" aria-hidden="true" />
                  <span className="flex items-baseline gap-2 whitespace-nowrap">
                    <strong className="text-lg leading-none sm:text-xl">3+</strong>
                    <span className="text-[10px] font-medium sm:text-xs">Years of Experience</span>
                  </span>
                </li>

                <li className="absolute right-0 top-1/2 flex min-h-12 -translate-y-1/2 items-center gap-2.5 rounded-2xl border border-black/10 bg-white px-3.5 py-2.5 text-black shadow-[0_16px_40px_rgb(0_0_0/0.16)] sm:min-h-14 sm:px-4">
                  <Lightbulb className="size-4 shrink-0 sm:size-5" aria-hidden="true" />
                  <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.08em] sm:text-xs">
                    Innovator
                  </span>
                </li>

                <li className="absolute bottom-0 left-4 flex min-h-12 items-center gap-2.5 rounded-2xl border border-black/10 bg-white px-3.5 py-2.5 text-black shadow-[0_16px_40px_rgb(0_0_0/0.16)] sm:left-8 sm:min-h-14 sm:px-4">
                  <Network className="size-4 shrink-0 sm:size-5" aria-hidden="true" />
                  <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.08em] sm:text-xs">
                    Cross Functional
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
