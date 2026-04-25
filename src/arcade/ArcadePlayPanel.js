import React, { useEffect, useRef } from "react";
import ArcadeGameSlot from "./ArcadeGameSlot";

function ArcadePlayPicker({
  playGames,
  accent,
  previewIndex,
  onPreviewIndex,
  onPick,
  launchingIndex,
  isLaunching,
}) {
  const rootRef = useRef(null);

  useEffect(() => {
    if (isLaunching || playGames.length === 0) return;
    rootRef.current?.focus({ preventScroll: true });
  }, [isLaunching, playGames.length]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      onPreviewIndex(Math.min(playGames.length - 1, previewIndex + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      onPreviewIndex(Math.max(0, previewIndex - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      onPick(previewIndex);
    }
  };

  return (
    <div className={`arcade-play-picker${isLaunching ? " arcade-play-picker--launching" : ""}`}>
      <p className="arcade-play-picker__heading" style={{ color: accent }}>
        SELECT GAME
      </p>
      <p className="arcade-play-picker__hint">
        <span className="arcade-play-picker__hint-key">▼▲</span> PREVIEW ·{" "}
        <span className="arcade-play-picker__hint-key">ENTER</span> LAUNCH
      </p>
      <ul
        ref={rootRef}
        className="arcade-play-picker__list"
        tabIndex={0}
        role="listbox"
        aria-label="Choose a mini-game"
        aria-activedescendant={`arcade-pick-${previewIndex}`}
        onKeyDown={onKeyDown}
      >
        {playGames.map((g, i) => {
          const isPreview = i === previewIndex;
          const isLaunch = launchingIndex === i;
          return (
            <li key={`${g.kind}-${i}`} className="arcade-play-picker__item" role="presentation">
              <button
                id={`arcade-pick-${i}`}
                type="button"
                role="option"
                aria-selected={isPreview}
                tabIndex={-1}
                className={[
                  "arcade-play-picker__card",
                  isPreview ? " is-preview" : "",
                  isLaunch ? " is-launching" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{
                  borderColor: isPreview ? accent : `${accent}66`,
                  boxShadow: isPreview ? `0 0 22px ${accent}44` : `0 0 12px ${accent}18`,
                }}
                onMouseEnter={() => onPreviewIndex(i)}
                onFocus={() => onPreviewIndex(i)}
                onClick={() => onPick(i)}
              >
                <span className="arcade-play-picker__title" style={{ color: accent }}>
                  {g.pickerLabel || g.pickTitle}
                </span>
                {g.pickBlurb ? (
                  <span className="arcade-play-picker__blurb">{g.pickBlurb}</span>
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function ArcadePlayPanel({
  cabinet,
  playGames = [],
  pickedIndex,
  onPickGame,
  previewIndex = 0,
  onPreviewIndex = () => {},
  launchingIndex = null,
  isLaunching = false,
}) {
  if (cabinet.kind === "projects") {
    return (
      <div className="arcade-play-placeholder">
        <p className="arcade-play-placeholder__title" style={{ color: cabinet.accent }}>
          PROJECT MODE
        </p>
        <p className="arcade-play-placeholder__text">
          Mini-games live on each <strong>career cabinet</strong>. Switch the sidebar to HourBlock, Quiz
          Arena, or another role and hit <strong>PLAY</strong>.
        </p>
      </div>
    );
  }

  const accent = cabinet.accent ?? "#3cf2c8";
  const picked = pickedIndex !== null ? playGames[pickedIndex] : null;
  const multi = playGames.length > 1;

  if (!picked) {
    return (
      <ArcadePlayPicker
        playGames={playGames}
        accent={accent}
        previewIndex={Math.min(previewIndex, Math.max(0, playGames.length - 1))}
        onPreviewIndex={onPreviewIndex}
        onPick={onPickGame}
        launchingIndex={launchingIndex}
        isLaunching={isLaunching}
      />
    );
  }

  return (
    <div className="arcade-play-session">
      {multi ? (
        <div className="arcade-play-session__bar">
          <button
            type="button"
            className="arcade-play-session__back"
            style={{ borderColor: `${accent}aa`, color: accent }}
            onClick={() => onPickGame(null)}
          >
            ← GAME MENU
          </button>
        </div>
      ) : null}
      <ArcadeGameSlot game={picked} />
    </div>
  );
}
