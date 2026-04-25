import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import profilePhoto from "../images/profile_image.jpeg";
import "./RetroStartScreen.css";

const MENU = [
  { id: "experience", label: "WORK EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "games", label: "READY TO PLAY GAMES" },
  { id: "resume", label: "DOWNLOAD RESUME" },
  { id: "socials", label: "SOCIALS" },
];

function playCoinChime() {
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    const now = ctx.currentTime;
    [880, 1320].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "square";
      osc.frequency.value = freq;
      const t0 = now + i * 0.06;
      gain.gain.setValueAtTime(0.06, t0);
      gain.gain.exponentialRampToValueAtTime(0.01, t0 + 0.12);
      osc.start(t0);
      osc.stop(t0 + 0.14);
    });
    ctx.resume?.();
  } catch {
    /* ignore */
  }
}

export default function RetroStartScreen({ open, siteTitle, onComplete }) {
  const [selected, setSelected] = useState(0);
  const [phase, setPhase] = useState("menu");
  const selectedRef = useRef(0);
  selectedRef.current = selected;

  const { displayName, roleTitle } = useMemo(() => {
    const parts = (siteTitle || "").split(" — ");
    const name = parts[0]?.trim() || "PLAYER 1";
    const role = parts.slice(1).join(" — ").trim() || null;
    return { displayName: name, roleTitle: role };
  }, [siteTitle]);

  const runComplete = useCallback(
    (optionId) => {
      playCoinChime();
      setPhase("coin");
      window.setTimeout(() => {
        onComplete(optionId);
      }, 1100);
    },
    [onComplete]
  );

  useEffect(() => {
    if (!open) {
      setPhase("menu");
      setSelected(0);
    }
  }, [open]);

  useEffect(() => {
    if (!open || phase !== "menu") return undefined;

    const onKey = (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((i) => (i + 1) % MENU.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((i) => (i - 1 + MENU.length) % MENU.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        runComplete(MENU[selectedRef.current].id);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, phase, runComplete]);

  if (!open) return null;

  const handleRowActivate = (index) => {
    if (phase !== "menu") return;
    setSelected(index);
    runComplete(MENU[index].id);
  };

  return (
    <div
      className={`retro-start${phase === "coin" ? " retro-start--coin" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="retro-start-title"
      aria-describedby={roleTitle ? "retro-start-role" : undefined}
    >
      <div className="retro-start__grid" aria-hidden="true" />
      <div className="retro-start__scanlines" aria-hidden="true" />

      <div className="retro-start__hud">
        <span className="retro-start__hud-left">CREDITS 00</span>
        <span className="retro-start__hud-right">HI-SCORE 000420</span>
      </div>

      <div className="retro-start__main">
        <div className="retro-start__hero">
          <div className="retro-start__avatar-shell">
            <div className="retro-start__avatar-frame">
              <img
                className="retro-start__avatar"
                src={profilePhoto}
                alt={`${displayName} portrait`}
                width={112}
                height={112}
                decoding="async"
              />
            </div>
          </div>
          <div className="retro-start__identity">
            <h1 id="retro-start-title" className="retro-start__title">
              {displayName}
            </h1>
            {roleTitle ? (
              <p className="retro-start__role" id="retro-start-role">
                {roleTitle.toUpperCase()}
              </p>
            ) : null}
          </div>
        </div>
        <p className="retro-start__subtitle">INSERT COIN TO CONTINUE</p>

        <ul className="retro-start__menu" role="listbox" aria-label="Main menu">
          {MENU.map((item, i) => (
            <li key={item.id} className="retro-start__menu-item">
              <button
                type="button"
                className={`retro-start__option${selected === i ? " is-selected" : ""}`}
                role="option"
                aria-selected={selected === i}
                disabled={phase !== "menu"}
                onClick={() => handleRowActivate(i)}
              >
                <span className="retro-start__caret" aria-hidden="true">
                  ▶
                </span>
                <span className="retro-start__label">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <p className="retro-start__hint">
          <span className="retro-start__blink">▼</span> ARROWS + ENTER{" "}
          <span className="retro-start__hint-muted">· OR TAP AN OPTION</span>
        </p>
      </div>

      <div className="retro-start__coin-layer" aria-hidden="true">
        <div className="retro-start__coin-slot">
          <span className="retro-start__slot-label">SLOT</span>
        </div>
        <div className="retro-start__coin">
          <div className="retro-start__coin-inner" />
        </div>
      </div>
    </div>
  );
}
