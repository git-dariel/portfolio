import { Code2, Mail, Network } from "lucide-react";

import { portfolio } from "@/config/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background px-5 py-7 sm:px-8 sm:py-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-xs leading-5 text-muted-foreground sm:flex-row sm:items-center">
        <p className="max-w-xs">© {new Date().getFullYear()} Dariel Avila. Built with Next.js & TypeScript.</p>
        <div className="flex items-center gap-2">
          <a href={portfolio.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex size-11 items-center justify-center border border-border transition-colors hover:border-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
            <Code2 className="size-4" />
          </a>
          <a href={portfolio.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex size-11 items-center justify-center border border-border transition-colors hover:border-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
            <Network className="size-4" />
          </a>
          <a href={`mailto:${portfolio.email}`} aria-label="Email" className="inline-flex size-11 items-center justify-center border border-border transition-colors hover:border-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
