import React from "react";
import { Github, Linkedin, Mail, Globe } from "lucide-react";
import { getArcadeImage } from "../data/arcadeImageMap";

const iconSize = 22;

export default function ArcadeTopBar({ meta, resume, social, onResumePreview }) {
  const avatarSrc = getArcadeImage("linkedin-img.jpeg");

  return (
    <header className="arcade-topbar">
      <div className="arcade-topbar__brand">
        <div className="arcade-topbar__dots" aria-hidden>
          <span className="arcade-topbar__dot" style={{ background: "#7c6fff" }} />
          <span className="arcade-topbar__dot" style={{ background: "#ff6b9d" }} />
          <span className="arcade-topbar__dot" style={{ background: "#4ecdc4" }} />
        </div>
        <img className="arcade-topbar__avatar" src={avatarSrc} alt="" width={36} height={36} />
        <div>
          <div className="arcade-topbar__name">ASHISH PATEL</div>
          <div className="arcade-topbar__role">FULL STACK SOFTWARE ENGINEER</div>
        </div>
      </div>

      <div className="arcade-topbar__coin" aria-hidden>
        INSERT COIN TO PLAY
      </div>

      <div className="arcade-topbar__actions">
        <a className="arcade-topbar__doc" href={resume.publicUrl} download={resume.downloadFileName}>
          Résumé
        </a>
        <button type="button" className="arcade-topbar__doc arcade-topbar__doc--ghost" onClick={onResumePreview}>
          Preview
        </button>
        <nav className="arcade-topbar__social" aria-label="Social">
          {social.map((s) => (
            <a
              key={s.id}
              href={s.url}
              aria-label={s.label}
              target={/^mailto:/i.test(s.url) ? undefined : "_blank"}
              rel={/^mailto:/i.test(s.url) ? undefined : "noopener noreferrer"}
            >
              {s.id === "github" && <Github size={iconSize} />}
              {s.id === "zetaweb" && <Globe size={iconSize} />}
              {s.id === "linkedin" && <Linkedin size={iconSize} />}
              {s.id === "email" && <Mail size={iconSize} />}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
