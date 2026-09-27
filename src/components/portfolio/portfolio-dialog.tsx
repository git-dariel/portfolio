"use client";

import type { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export function PortfolioDialog({
  trigger,
  eyebrow,
  title,
  description,
  children,
}: {
  trigger: ReactNode;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-sm data-[state=closed]:animate-none" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[90] flex max-h-[92dvh] w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 -translate-y-1/2 flex-col border border-zinc-700 bg-[#050505] text-white shadow-2xl focus:outline-none sm:w-[calc(100%-3rem)]">
          <div className="flex items-start justify-between gap-6 border-b border-zinc-800 px-4 py-4 sm:px-6 sm:py-5">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-400">{eyebrow}</p>
              <Dialog.Title className="mt-2 text-xl font-semibold tracking-[-0.035em] sm:text-2xl">{title}</Dialog.Title>
              <Dialog.Description className="mt-2 max-w-3xl text-sm leading-6 text-zinc-400">{description}</Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <button type="button" aria-label={`Close ${title}`} className="inline-flex size-11 shrink-0 cursor-pointer items-center justify-center border border-zinc-700 text-zinc-400 transition-colors hover:border-white hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <X className="size-4" />
              </button>
            </Dialog.Close>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
