import React, { useCallback, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import "./ArcadeSocialsModal.css";

function isExternal(url) {
  return /^https?:/i.test(url);
}

export default function ArcadeSocialsModal({ social, onClose, open }) {
  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return undefined;
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, handleKey]);

  if (!open) return null;

  return (
    <div
      className="arcade-socials-portal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="arcade-socials-title"
    >
      <button type="button" className="arcade-socials-portal__backdrop" onClick={onClose} aria-label="Close" />
      <div className="arcade-socials-panel">
        <div className="arcade-socials-panel__header">
          <h2 id="arcade-socials-title" className="arcade-socials-panel__title">
            CREDIT LINKS
          </h2>
          <p className="arcade-socials-panel__sub">COIN ACCEPTED — PICK A CHANNEL</p>
        </div>
        <ul className="arcade-socials-panel__list">
          {social.map((s) => {
            const external = isExternal(s.url);
            return (
              <li key={s.id} className="arcade-socials-panel__row">
                <a
                  className="arcade-socials-panel__link"
                  href={s.url}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                >
                  <span className="arcade-socials-panel__link-label">{s.label}</span>
                  {external ? (
                    <span className="arcade-socials-panel__ext" aria-hidden>
                      <ExternalLink size={16} />
                    </span>
                  ) : null}
                </a>
              </li>
            );
          })}
        </ul>
        <p className="arcade-socials-panel__footer">
          <span className="arcade-socials-panel__kbd">ESC</span> OR CLICK OUT
        </p>
        <button type="button" className="arcade-socials-panel__close" onClick={onClose}>
          CLOSE
        </button>
      </div>
    </div>
  );
}
