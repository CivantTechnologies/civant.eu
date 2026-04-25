"use client";

/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { useEffect, useId, useState } from "react";

export function ArticleExpandableVisual({
  src,
  alt,
  caption,
  tone = "intelligence",
  reliefMark = true,
}: {
  src: string;
  alt: string;
  caption?: string;
  tone?: "intelligence" | "preparation";
  reliefMark?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const title = caption || alt;

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <figure
      className={`article-hero-visual article-hero-visual-${tone} ${
        reliefMark ? "article-hero-visual-relief" : ""
      }`.trim()}
    >
      <button
        type="button"
        className="article-hero-image article-hero-image-button"
        aria-label={`Expand article visual: ${title}`}
        onClick={() => setOpen(true)}
      >
        <Image src={src} alt={alt} fill sizes="(max-width: 760px) 100vw, 48rem" priority={false} />
        <span className="article-hero-expand-cue" aria-hidden="true">
          Expand
        </span>
      </button>
      {caption ? <figcaption>{caption}</figcaption> : null}

      {open ? (
        <div
          className="screenshot-lightbox article-visual-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            className="screenshot-lightbox-backdrop"
            aria-label="Close expanded article visual"
          />
          <div className="screenshot-lightbox-panel article-visual-lightbox-panel">
            <div className="screenshot-lightbox-topbar">
              <p id={titleId} className="screenshot-lightbox-title">
                {title}
              </p>
              <button
                type="button"
                className="screenshot-lightbox-close"
                aria-label="Close expanded article visual"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
            <div className="screenshot-lightbox-scroll article-visual-lightbox-scroll">
              <img src={src} alt={alt} className="screenshot-lightbox-img article-visual-lightbox-img" />
            </div>
          </div>
        </div>
      ) : null}
    </figure>
  );
}
