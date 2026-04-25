import React, { useCallback, useEffect, useMemo, useState } from "react";
import ArcadePlayPanel from "./ArcadePlayPanel";
import "./RetroGameOverlay.css";

const LAUNCH_MS = 440;

export default function RetroGameOverlay({ open, cabinet, siteTitle, onClose }) {
  const playGames = useMemo(() => cabinet?.playGames ?? [], [cabinet]);
  const cabinetId = cabinet?.id;
  const cabinetKind = cabinet?.kind;
  const playGameCount = cabinet?.playGames?.length ?? 0;

  const [pickedIndex, setPickedIndex] = useState(null);
  const [previewIndex, setPreviewIndex] = useState(0);
  const [isLaunching, setIsLaunching] = useState(false);
  const [launchingPick, setLaunchingPick] = useState(null);

  useEffect(() => {
    if (!open) {
      setPickedIndex(null);
      setPreviewIndex(0);
      setIsLaunching(false);
      setLaunchingPick(null);
      return;
    }
    if (!cabinetId || cabinetKind === "projects") {
      setPickedIndex(null);
      setPreviewIndex(0);
      setIsLaunching(false);
      setLaunchingPick(null);
      return;
    }
    if (playGameCount === 1) {
      setPickedIndex(0);
      setPreviewIndex(0);
      setIsLaunching(false);
      setLaunchingPick(null);
    } else {
      setPickedIndex(null);
      setPreviewIndex(0);
      setIsLaunching(false);
      setLaunchingPick(null);
    }
  }, [open, cabinetId, cabinetKind, playGameCount]);

  const handlePickGame = useCallback(
    (index) => {
      if (index === null) {
        setPickedIndex(null);
        setIsLaunching(false);
        setLaunchingPick(null);
        return;
      }
      if (playGameCount <= 1) {
        setPickedIndex(index);
        return;
      }
      setPreviewIndex(index);
      setLaunchingPick(index);
      setIsLaunching(true);
      window.setTimeout(() => {
        setPickedIndex(index);
        setIsLaunching(false);
        setLaunchingPick(null);
      }, LAUNCH_MS);
    },
    [playGameCount]
  );

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open || !cabinet) return null;

  const shortTitle = (siteTitle && siteTitle.split(" — ")[0]) || "ARCADE";
  const picked = pickedIndex !== null ? playGames[pickedIndex] : null;
  const previewGame =
    cabinet.kind !== "projects" && playGames.length > 0
      ? playGames[Math.min(previewIndex, playGames.length - 1)]
      : null;
  const activeForMarquee = picked ?? previewGame;

  const marqueeEyebrow =
    cabinet.kind === "projects" ? null : `${cabinet.name.toUpperCase()} CABINET`;

  const marqueeTitle = (() => {
    if (cabinet.kind === "projects") return cabinet.name.toUpperCase();
    if (!activeForMarquee) return "SELECT MODULE";
    if (pickedIndex !== null && activeForMarquee.employer) {
      return activeForMarquee.employer;
    }
    if (activeForMarquee.pickerLabel) return activeForMarquee.pickerLabel;
    if (activeForMarquee.pickTitle) return activeForMarquee.pickTitle;
    return "SELECT MODULE";
  })();

  const marqueeSub = (() => {
    if (cabinet.kind === "projects") return cabinet.type;
    if (activeForMarquee?.marqueeSub) return activeForMarquee.marqueeSub;
    return "Pick a module — each one maps to the work behind this cabinet.";
  })();

  const screenClass = [
    "retro-game-overlay__screen",
    isLaunching ? "retro-game-overlay__screen--launching" : "",
    pickedIndex !== null ? "retro-game-overlay__screen--playing" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const panelKey = pickedIndex !== null ? `playing-${pickedIndex}` : "picker";

  return (
    <div
      className="retro-game-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="retro-game-overlay-title"
    >
      <div className="retro-game-overlay__grid" aria-hidden="true" />
      <div className="retro-game-overlay__scanlines" aria-hidden="true" />

      <div className="retro-game-overlay__topbar">
        <span className="retro-game-overlay__credits">CREDITS 01 · {shortTitle.toUpperCase()}</span>
        <button type="button" className="retro-game-overlay__exit" onClick={onClose}>
          EXIT <span className="retro-game-overlay__exit-key">ESC</span>
        </button>
      </div>

      <div className="retro-game-overlay__frame">
        <div className="retro-game-overlay__marquee">
          {marqueeEyebrow ? (
            <span className="retro-game-overlay__eyebrow">{marqueeEyebrow}</span>
          ) : null}
          <span id="retro-game-overlay-title" className="retro-game-overlay__cabinet">
            {marqueeTitle}
          </span>
          <span className="retro-game-overlay__marquee-sub">{marqueeSub}</span>
        </div>
        <div className={screenClass}>
          <div key={panelKey} className="retro-game-overlay__panel-slot">
            <ArcadePlayPanel
              cabinet={cabinet}
              playGames={playGames}
              pickedIndex={pickedIndex}
              onPickGame={handlePickGame}
              previewIndex={previewIndex}
              onPreviewIndex={setPreviewIndex}
              launchingIndex={launchingPick}
              isLaunching={isLaunching}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
