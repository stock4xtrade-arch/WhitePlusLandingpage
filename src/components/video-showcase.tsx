"use client";

import { Play, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TEASER = "/media/whiteplus-teaser.mp4";
const DEMO = "/media/whiteplus-demo.mp4";
const POSTER = "/media/whiteplus-demo-poster.jpg";

/**
 * Pinned to the viewport like the WhatsApp button — the page scrolls behind it.
 */
export function VideoTeaser() {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const teaserRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = teaserRef.current;
    if (!video) return;
    // The looping teaser is decorative — hold on the poster frame when motion is reduced.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) video.pause();
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsPlayerOpen(true)}
        aria-label="Play the WhitePlus Solution platform demo video"
        className="group fixed bottom-5 left-5 z-40 block w-24 cursor-pointer overflow-hidden rounded-2xl border border-white/20 bg-navy-800 shadow-2xl shadow-navy-950/40 transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98] sm:w-28"
      >
        <video
          ref={teaserRef}
          src={TEASER}
          poster={POSTER}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          className="aspect-9/16 size-full object-cover"
        />
        <span
          className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"
          aria-hidden="true"
        />
        <span
          className="absolute left-1/2 top-1/2 inline-flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-navy-900 transition-transform duration-200 group-hover:scale-110"
          aria-hidden="true"
        >
          <Play className="ml-0.5 size-4 fill-current" />
        </span>
        <span
          className="absolute inset-x-0 bottom-0 px-2 pb-2 text-center text-[10px] font-semibold text-white"
          aria-hidden="true"
        >
          Watch demo
        </span>
      </button>

      {isPlayerOpen ? <VideoPlayer onClose={() => setIsPlayerOpen(false)} /> : null}
    </>
  );
}

function VideoPlayer({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="WhitePlus Solution platform demo"
      className="fixed inset-0 z-[95] flex items-center justify-center p-4"
    >
      <button
        type="button"
        aria-label="Close video"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-navy-950/85 backdrop-blur-sm"
      />

      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close video"
        className="absolute right-4 top-4 z-10 inline-flex size-12 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <X className="size-6" aria-hidden="true" />
      </button>

      <video
        src={DEMO}
        poster={POSTER}
        controls
        autoPlay
        playsInline
        preload="auto"
        className="relative max-h-[86vh] w-auto max-w-full rounded-2xl bg-black shadow-2xl"
      />
    </div>
  );
}
