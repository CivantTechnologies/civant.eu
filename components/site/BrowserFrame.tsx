/**
 * BrowserFrame – wraps a screenshot in a minimal browser-chrome UI.
 * Keeps the Civant dark-theme palette so it blends with the site.
 */
export function BrowserFrame({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="browser-frame">
      <div className="browser-frame-bar">
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-dot" />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="browser-frame-img"
        loading="lazy"
      />
      {caption && <figcaption className="browser-frame-caption">{caption}</figcaption>}
    </figure>
  );
}
