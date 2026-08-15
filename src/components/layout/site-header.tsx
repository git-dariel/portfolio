import { ArrowUpRight } from "lucide-react";

import { portfolio } from "@/config/portfolio";

const navigation = [
  ["Work", "#work"],
  ["Architecture", "#architecture"],
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

          <a
            href={`mailto:${portfolio.email}`}
            className="inline-flex shrink-0 items-center gap-1.5 border-b border-foreground pb-0.5 text-xs font-medium transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-sm"
          >
            Say hello
            <ArrowUpRight className="size-3.5" />
          </a>
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
