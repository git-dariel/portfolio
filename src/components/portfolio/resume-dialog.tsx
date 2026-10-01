"use client";

import { Download, Eye } from "lucide-react";

import { PortfolioDialog } from "@/components/portfolio/portfolio-dialog";

export function ResumeDialog() {
  return (
    <PortfolioDialog
      trigger={
        <button type="button" className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 border border-surface-foreground px-5 py-3 text-sm font-semibold transition-colors hover:bg-surface-foreground hover:text-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-ring">
          <Eye className="size-4" />
          View resume
        </button>
      }
      eyebrow="Resume preview"
      title="Dariel Avila — Software Engineer"
      description="Review my experience and technical background here. The downloadable PDF is available below the preview."
    >
      <div className="p-3 sm:p-6">
        <div className="h-[58dvh] min-h-96 overflow-hidden border border-border-strong bg-surface sm:h-[64dvh]">
          <iframe
            src="/resume?view=inline#view=FitH&toolbar=1"
            title="Dariel Avila resume preview"
            loading="lazy"
            className="h-full w-full"
          />
        </div>

        <div className="mt-4 flex flex-col justify-between gap-4 border-t border-border pt-4 sm:flex-row sm:items-center">
          <p className="max-w-xl text-xs leading-5 text-muted-foreground">If the PDF preview is unavailable in your browser, download the file to view it locally.</p>
          <a href="/resume?download=1" download="Dariel-Avila-Resume.pdf" className="inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:w-fit">
            <Download className="size-4" />
            Download resume
          </a>
        </div>
      </div>
    </PortfolioDialog>
  );
}
