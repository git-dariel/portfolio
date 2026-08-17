"use client";

import { useEffect, useId, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Workflow, X } from "lucide-react";

function MermaidDiagram({ diagram, title }: { diagram: string; title: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const renderId = `architecture-${useId().replace(/:/g, "")}`;
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let active = true;
    const container = containerRef.current;

    async function renderDiagram() {
      try {
        const mermaid = (await import("mermaid")).default;

        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          theme: "base",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
          themeVariables: {
            background: "#ffffff",
            primaryColor: "#ffffff",
            primaryTextColor: "#050505",
            primaryBorderColor: "#050505",
            secondaryColor: "#ffffff",
            secondaryTextColor: "#050505",
            secondaryBorderColor: "#050505",
            tertiaryColor: "#f4f4f5",
            tertiaryTextColor: "#050505",
            tertiaryBorderColor: "#71717a",
            lineColor: "#52525b",
            textColor: "#050505",
            mainBkg: "#ffffff",
            nodeBorder: "#050505",
            clusterBkg: "#fafafa",
            clusterBorder: "#71717a",
            edgeLabelBackground: "#ffffff",
            fontSize: "13px",
          },
          themeCSS: `
            .nodeLabel,
            .edgeLabel,
            .cluster-label,
            .label text,
            .cluster-label text {
              color: #050505 !important;
              fill: #050505 !important;
            }
            .edgeLabel rect,
            .labelBkg {
              fill: #ffffff !important;
              opacity: 1 !important;
            }
          `,
          flowchart: {
            curve: "linear",
            htmlLabels: true,
            nodeSpacing: 36,
            rankSpacing: 48,
            useMaxWidth: true,
          },
        });

        const { svg } = await mermaid.render(`${renderId}-${attempt}`, diagram);

        if (!active || !container) return;

        container.innerHTML = svg;
        const renderedSvg = container.querySelector("svg");
        renderedSvg?.setAttribute("role", "img");
        renderedSvg?.setAttribute("aria-label", title);
        setStatus("ready");
      } catch {
        if (active) setStatus("error");
      }
    }

    void renderDiagram();

    return () => {
      active = false;
      if (container) container.innerHTML = "";
    };
  }, [attempt, diagram, renderId, title]);

  function retryDiagram() {
    setStatus("loading");
    setAttempt((value) => value + 1);
  }

  return (
    <div className="relative min-h-64 bg-white p-3 text-black sm:min-h-80 sm:p-6">
      {status === "loading" ? (
        <div className="absolute inset-0 flex items-center justify-center" aria-live="polite">
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-black/45">Rendering architecture…</span>
        </div>
      ) : null}

      {status === "error" ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center" role="alert">
          <p className="max-w-sm text-sm leading-6 text-black/60">The architecture diagram could not be rendered.</p>
          <button type="button" onClick={retryDiagram} className="min-h-10 border border-black px-4 text-xs font-semibold transition-colors hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            Retry diagram
          </button>
        </div>
      ) : null}

      <div ref={containerRef} className={`mermaid-diagram overflow-auto [&_svg]:mx-auto [&_svg]:h-auto [&_svg]:max-w-full ${status === "ready" ? "opacity-100" : "opacity-0"}`} />
    </div>
  );
}

export function ArchitectureDialog({
  title,
  description,
  diagram,
}: {
  title: string;
  description: string;
  diagram: string;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type="button" className="architecture-trigger inline-flex min-h-10 w-full cursor-pointer items-center justify-center gap-2 border border-zinc-600 px-4 font-mono text-[10px] uppercase tracking-[0.08em] text-zinc-200 transition-colors hover:border-white hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-fit">
          <span className="relative z-10">View architecture</span>
          <Workflow className="relative z-10 size-3.5" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-sm data-[state=closed]:animate-none" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[90] flex max-h-[92dvh] w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 -translate-y-1/2 flex-col border border-zinc-700 bg-[#050505] text-white shadow-2xl focus:outline-none sm:w-[calc(100%-3rem)]">
          <div className="flex items-start justify-between gap-6 border-b border-zinc-800 px-4 py-4 sm:px-6 sm:py-5">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-500">Sanitized system view</p>
              <Dialog.Title className="mt-2 text-xl font-semibold tracking-[-0.035em] sm:text-2xl">{title}</Dialog.Title>
              <Dialog.Description className="mt-2 max-w-3xl text-sm leading-6 text-zinc-400">{description}</Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <button type="button" aria-label="Close architecture diagram" className="inline-flex size-11 shrink-0 items-center justify-center border border-zinc-700 text-zinc-400 transition-colors hover:border-white hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <X className="size-4" />
              </button>
            </Dialog.Close>
          </div>

          <div className="min-h-0 overflow-y-auto p-3 sm:p-6">
            <div className="border border-zinc-700">
              <MermaidDiagram diagram={diagram} title={title} />
            </div>
            <p className="mt-3 font-mono text-[9px] uppercase leading-5 tracking-[0.08em] text-zinc-500">
              Logical architecture only · Names and client-specific boundaries are generalized for confidentiality
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
