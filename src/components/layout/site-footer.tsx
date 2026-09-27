import { ArrowUp, Mail } from "lucide-react";

import { portfolio } from "@/config/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background px-5 py-7 sm:px-8 sm:py-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-xs leading-5 text-muted-foreground sm:flex-row sm:items-center">
        <p className="max-w-xs">© {new Date().getFullYear()} Dariel Avila. Built with Next.js & TypeScript.</p>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <a href={portfolio.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex size-11 items-center justify-center border border-border transition-colors hover:border-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true" focusable="false">
                <path d="M12 .297a12 12 0 0 0-3.793 23.385c.6.111.82-.261.82-.577 0-.285-.011-1.04-.017-2.041-3.338.724-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.494.998.108-.776.418-1.305.762-1.605-2.665-.303-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 6.008 0c2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.902-.015 3.296 0 .319.216.694.825.576A12.001 12.001 0 0 0 12 .297Z" />
              </svg>
            </a>
            <a href={portfolio.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex size-11 items-center justify-center border border-border transition-colors hover:border-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true" focusable="false">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
              </svg>
            </a>
            <a href={`mailto:${portfolio.email}`} aria-label="Email" className="inline-flex size-11 items-center justify-center border border-border transition-colors hover:border-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
              <Mail className="size-4" aria-hidden="true" />
            </a>
          </div>
          <a href="#top" className="ml-auto inline-flex h-11 items-center justify-center gap-2 border border-border px-4 font-medium text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
            Back to top
            <ArrowUp className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
