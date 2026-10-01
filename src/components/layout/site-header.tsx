import { ArrowUpRight } from "lucide-react";

import { portfolio } from "@/config/portfolio";

const navigation = [
  ["Applications", "#applications"],
  ["Work", "#work"],
  ["Expertise", "#expertise"],
  ["Experience", "#experience"],
  ["About", "#about"],
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href="#top"
            aria-label="Dariel Avila, back to top"
            className="shrink-0 font-mono text-xs font-semibold tracking-[-0.04em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-sm"
          >
            DARIEL AVILA<span className="text-muted-foreground">.</span>
          </a>

          <nav className="hidden items-center gap-7 font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground xl:flex" aria-label="Primary navigation">
            {navigation.map(([label, href]) => (
              <a key={href} href={href} className="transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <a
              href={portfolio.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="inline-flex size-10 items-center justify-center text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M12 .297a12 12 0 0 0-3.793 23.385c.6.111.82-.261.82-.577 0-.285-.011-1.04-.017-2.041-3.338.724-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.494.998.108-.776.418-1.305.762-1.605-2.665-.303-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 6.008 0c2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.902-.015 3.296 0 .319.216.694.825.576A12.001 12.001 0 0 0 12 .297Z" />
              </svg>
            </a>

            <a
              href={`mailto:${portfolio.email}`}
              className="inline-flex shrink-0 items-center gap-1.5 border-b border-foreground pb-0.5 text-xs font-medium transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-sm"
            >
              <span className="sr-only min-[360px]:not-sr-only">Say hello</span>
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>

        <nav className="mobile-nav -mx-5 flex overflow-x-auto border-t border-border px-5 font-mono text-[10px] uppercase tracking-[0.08em] text-muted-foreground sm:-mx-8 sm:px-8 xl:hidden" aria-label="Mobile navigation">
          {navigation.map(([label, href]) => (
            <a key={href} href={href} className="shrink-0 px-3 py-3 first:pl-0 last:pr-0 transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
