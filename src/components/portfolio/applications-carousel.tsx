"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function ApplicationsCarousel({ children }: { children: ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function updateControls() {
      if (!track) return;
      setCanScrollBack(track.scrollLeft > 1);
      setCanScrollForward(track.scrollLeft + track.clientWidth < track.scrollWidth - 1);
    }

    updateControls();
    const observer = new ResizeObserver(updateControls);
    observer.observe(track);
    track.addEventListener("scroll", updateControls, { passive: true });
    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", updateControls);
    };
  }, []);

  function scroll(direction: number) {
    const track = trackRef.current;
    const card = track?.firstElementChild;
    if (!track || !card) return;

    track.scrollBy({
      left: direction * card.getBoundingClientRect().width,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

    event.preventDefault();
    scroll(event.key === "ArrowLeft" ? -1 : 1);
  }

  const buttonClass = "inline-flex size-11 items-center justify-center border border-black/15 bg-white text-black transition-colors hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-white disabled:hover:text-black";

  return (
    <div className="relative mt-8 sm:px-12 lg:mt-5" role="region" aria-roledescription="carousel" aria-label="Applications">
      <div className="mb-3 flex justify-end gap-2 sm:hidden">
        <button type="button" aria-label="Previous application" aria-controls="applications-track" disabled={!canScrollBack} onClick={() => scroll(-1)} className={buttonClass}>
          <ArrowLeft className="size-5" aria-hidden="true" />
        </button>
        <button type="button" aria-label="Next application" aria-controls="applications-track" disabled={!canScrollForward} onClick={() => scroll(1)} className={buttonClass}>
          <ArrowRight className="size-5" aria-hidden="true" />
        </button>
      </div>
      <button type="button" aria-label="Previous application" aria-controls="applications-track" disabled={!canScrollBack} onClick={() => scroll(-1)} className={`${buttonClass} absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 sm:inline-flex`}>
        <ArrowLeft className="size-5" aria-hidden="true" />
      </button>
      <button type="button" aria-label="Next application" aria-controls="applications-track" disabled={!canScrollForward} onClick={() => scroll(1)} className={`${buttonClass} absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 sm:inline-flex`}>
        <ArrowRight className="size-5" aria-hidden="true" />
      </button>
      <div
        id="applications-track"
        ref={trackRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-label="Application cards. Use the arrow keys or swipe to browse."
        className="grid auto-cols-[100%] grid-flow-col snap-x snap-mandatory overflow-x-auto overscroll-x-contain border-l border-t border-black/15 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:auto-cols-[50%] lg:auto-cols-[33.333333%]"
      >
        {children}
      </div>
    </div>
  );
}
