"use client";

import { Check, Copy, Share2, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { SITE_URL } from "../../lib/seo";

type ShareArticleButtonProps = {
  title: string;
  path: string;
};

type ShareOption = {
  label: string;
  href: string;
  icon: "linkedin" | "reddit" | "whatsapp" | "facebook";
};

export function ShareArticleButton({ title, path }: ShareArticleButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const shareUrl = `${SITE_URL}${path}`;

  const shareOptions = useMemo<ShareOption[]>(() => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(title);

    return [
      {
        label: "LinkedIn",
        href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        icon: "linkedin",
      },
      {
        label: "Reddit",
        href: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
        icon: "reddit",
      },
      {
        label: "WhatsApp",
        href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
        icon: "whatsapp",
      },
      {
        label: "Facebook",
        href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        icon: "facebook",
      },
    ];
  }, [shareUrl, title]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="article-share">
      <button
        type="button"
        className="article-share-trigger"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        <Share2 size={15} aria-hidden="true" />
        <span>Share</span>
      </button>

      {isOpen ? (
        <div className="article-share-backdrop" role="presentation" onMouseDown={() => setIsOpen(false)}>
          <div
            className="article-share-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="article-share-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="article-share-head">
              <div>
                <p className="eyebrow">Share Guide</p>
                <h2 id="article-share-title">Send this article</h2>
              </div>
              <button
                type="button"
                className="article-share-close"
                aria-label="Close share options"
                onClick={() => setIsOpen(false)}
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <div className="article-share-options">
              {shareOptions.map((option) => (
                <a
                  key={option.label}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="article-share-option"
                >
                  <ShareIcon icon={option.icon} />
                  <span>{option.label}</span>
                </a>
              ))}
              <button type="button" className="article-share-option" onClick={copyLink}>
                {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
                <span>{copied ? "Copied" : "Copy link"}</span>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function ShareIcon({ icon }: { icon: ShareOption["icon"] }) {
  if (icon === "linkedin") {
    return (
      <svg className="article-share-brand-icon article-share-brand-linkedin" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
      </svg>
    );
  }

  if (icon === "reddit") {
    return (
      <svg className="article-share-brand-icon article-share-brand-reddit" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm5.02 4.74a1.25 1.25 0 0 1 1.24 1.25 1.25 1.25 0 0 1-2.49.16l-2.62-.56-.78 3.66c1.82.07 3.47.63 4.67 1.49.31-.31.73-.49 1.21-.49a1.75 1.75 0 0 1 1.01 3.18c.02.18.03.37.03.56 0 2.77-3.27 5.01-7.29 5.01s-7.29-2.24-7.29-5.01c0-.19.01-.38.03-.56a1.75 1.75 0 1 1 2.22-2.69c1.2-.86 2.85-1.42 4.68-1.49l.91-4.28a.5.5 0 0 1 .59-.38l3.06.65c.23-.3.58-.5.82-.5Zm-8.6 8.44a1.22 1.22 0 1 0 0 2.44 1.22 1.22 0 0 0 0-2.44Zm7.16 0a1.22 1.22 0 1 0 0 2.44 1.22 1.22 0 0 0 0-2.44Zm-5.71 3.27a.38.38 0 0 0-.27.65c.83.82 2.06.91 2.4.91.34 0 1.57-.09 2.4-.91a.38.38 0 0 0-.54-.54c-.47.47-1.43.63-1.86.63-.43 0-1.39-.16-1.86-.63a.38.38 0 0 0-.27-.11Z" />
      </svg>
    );
  }

  if (icon === "whatsapp") {
    return (
      <svg className="article-share-brand-icon article-share-brand-whatsapp" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Zm-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26A9.88 9.88 0 0 1 12.05 2c2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.88 9.89Zm8.41-18.29A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.89 11.89 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.49-8.41Z" />
      </svg>
    );
  }

  return (
    <svg className="article-share-brand-icon article-share-brand-facebook" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9.1 23.69v-7.98H6.63v-3.67H9.1v-1.58c0-4.08 1.85-5.98 5.86-5.98.76 0 2.07.15 2.61.3v3.32c-.28-.03-.78-.04-1.39-.04-1.97 0-2.73.74-2.73 2.68v1.3h3.92l-.67 3.67h-3.25v7.98H9.1Z" />
    </svg>
  );
}
