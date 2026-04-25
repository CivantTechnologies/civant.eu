"use client";

import { useEffect, useId, useState } from "react";

/**
 * BrowserFrame – wraps a screenshot in a minimal browser-chrome UI.
 * Keeps the Civant dark-theme palette so it blends with the site.
 */
export function BrowserFrame({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
}) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const avifSrc = src.replace(/\.[^.]+$/, ".avif");
  const webpSrc = src.replace(/\.[^.]+$/, ".webp");

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
    <figure className="browser-frame">
      <div className="browser-frame-bar">
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-frame-action">Click to expand</span>
      </div>
      <button
        type="button"
        className="browser-frame-button"
        aria-label={`Expand screenshot: ${caption || alt}`}
        onClick={() => setOpen(true)}
      >
        <picture className="browser-frame-picture">
          <source srcSet={avifSrc} type="image/avif" />
          <source srcSet={webpSrc} type="image/webp" />
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="browser-frame-img"
            loading="lazy"
          />
        </picture>
      </button>
      {caption && <figcaption className="browser-frame-caption">{caption}</figcaption>}

      {open ? (
        <div
          className="screenshot-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            className="screenshot-lightbox-backdrop"
            aria-label="Close expanded screenshot"
          />
          <div className="screenshot-lightbox-panel">
            <div className="screenshot-lightbox-topbar">
              <p id={titleId} className="screenshot-lightbox-title">
                {caption || "Product screenshot"}
              </p>
              <button
                type="button"
                className="screenshot-lightbox-close"
                aria-label="Close expanded screenshot"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
            <div className="screenshot-lightbox-scroll">
              <picture>
                <source srcSet={avifSrc} type="image/avif" />
                <source srcSet={webpSrc} type="image/webp" />
                <img
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  className="screenshot-lightbox-img"
                />
              </picture>
            </div>
          </div>
        </div>
      ) : null}
    </figure>
  );
}
