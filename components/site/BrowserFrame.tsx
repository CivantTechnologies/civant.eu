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
  const avifSrc = src.replace(/\.[^.]+$/, ".avif");
  const webpSrc = src.replace(/\.[^.]+$/, ".webp");

  return (
    <figure className="browser-frame">
      <div className="browser-frame-bar">
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-dot" />
      </div>
      <picture className="browser-frame-picture">
        <source srcSet={avifSrc} type="image/avif" />
        <source srcSet={webpSrc} type="image/webp" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="browser-frame-img"
          loading="lazy"
        />
      </picture>
      {caption && <figcaption className="browser-frame-caption">{caption}</figcaption>}
    </figure>
  );
}
