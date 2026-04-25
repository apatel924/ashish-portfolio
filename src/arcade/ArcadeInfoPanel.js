import React from "react";
import ArcadeProjectsFloor from "./ArcadeProjectsFloor";

export default function ArcadeInfoPanel({ cabinet, onOpenGallery }) {
  const { accent, kind } = cabinet;

  if (kind === "projects") {
    return (
      <div className="arcade-info-panel arcade-info-panel--projects">
        <p
          className="arcade-info-panel__lede arcade-cascade-in"
          style={{ "--cascade-index": 3 }}
        >
          Everything below is live in the showroom—thumbnails, filmstrips, and full reels.
        </p>
        <ArcadeProjectsFloor
          projects={cabinet.projectsData}
          onOpenGallery={onOpenGallery}
          embedded
          cascadeFromIndex={4}
        />
      </div>
    );
  }

  if (kind === "all_games") {
    return (
      <div className="arcade-info-panel">
        <div
          className="arcade-info-block arcade-cascade-in"
          style={{ borderLeftColor: accent, "--cascade-index": 3 }}
        >
          <div className="arcade-info-label" style={{ color: accent }}>
            MINI-GAME LOBBY
          </div>
          <p className="arcade-info-text">
            Each career cabinet has a small interactive module that maps to that role. The About cabinet has a
            profile quiz. Open <strong>Play</strong> to pick one from the full list, or use{" "}
            <strong>Ready to play games</strong> on the start screen to jump here.
          </p>
        </div>
      </div>
    );
  }

  if (kind === "about") {
    const { meta } = cabinet;
    const playerStats = Array.isArray(meta.playerStats) ? meta.playerStats : [];
    const n = playerStats.length;
    const bioI = n === 0 ? 4 : 5 + n;
    const tagI = n === 0 ? 5 : 6 + n;
    return (
      <div className="arcade-info-panel">
        <div className="arcade-stat-grid arcade-stat-grid--single">
          <div className="arcade-stat-box arcade-cascade-in" style={{ "--cascade-index": 3 }}>
            <span className="arcade-stat-num" style={{ color: accent }}>
              Hi
            </span>
            <span className="arcade-stat-lbl">I&apos;m Ashish — thanks for playing</span>
          </div>
        </div>
        {playerStats.length > 0 && (
          <>
            <div
              className="arcade-stat-section-label arcade-cascade-in"
              style={{ "--cascade-index": 4 }}
            >
              <div className="arcade-info-label" style={{ color: accent }}>
                BASE ATTRIBUTES
              </div>
              <p className="arcade-stat-section-hint">RPG bar chart energy for real-life hobbies (theme, not a scoreboard).</p>
            </div>
            <div className="arcade-stat-grid arcade-stat-grid--player">
              {playerStats.map((st, i) => (
                <div
                  key={`${st.kicker ?? "stat"}-${i}`}
                  className="arcade-stat-box arcade-cascade-in"
                  style={{ "--stat-accent": accent, "--cascade-index": 5 + i }}
                >
                  {st.kicker && (
                    <span className="arcade-stat-kicker">{st.kicker}</span>
                  )}
                  <span className="arcade-stat-num" style={{ color: accent }}>
                    {st.num}
                  </span>
                  <span className="arcade-stat-lbl">{st.label}</span>
                  {st.detail && <span className="arcade-stat-detail">{st.detail}</span>}
                </div>
              ))}
            </div>
          </>
        )}
        <div
          className="arcade-info-block arcade-cascade-in"
          style={{ borderLeftColor: accent, "--cascade-index": bioI }}
        >
          <div className="arcade-info-label" style={{ color: accent }}>
            PLAYER BIO
          </div>
          <p className="arcade-info-text">{meta.playerAbout}</p>
        </div>
        <div
          className="arcade-info-block arcade-cascade-in"
          style={{ borderLeftColor: accent, "--cascade-index": tagI }}
        >
          <div className="arcade-info-label" style={{ color: accent }}>
            TAGLINE
          </div>
          <p className="arcade-info-text">{meta.heroTagline}</p>
        </div>
      </div>
    );
  }

  const exp = cabinet.experience;
  const stats = exp.highlightStats ?? [];
  const bars = exp.skillBars ?? [];
  const screens = exp.allScreenSrcs ?? [];
  const s = stats.length;
  const missionI = 3 + (s > 0 ? s : 0);
  let nextI = missionI + 1;
  const tagI = exp.technologies?.length > 0 ? nextI++ : null;
  const linkedI = (exp.relatedProjectsResolved?.length ?? 0) > 0 ? nextI++ : null;
  const barsI = bars.length > 0 ? nextI++ : null;
  const shotsI = screens.length > 0 ? nextI : null;

  return (
    <div className="arcade-info-panel">
      {s > 0 && (
        <div className="arcade-stat-grid">
          {stats.map((st, i) => (
            <div
              key={i}
              className="arcade-stat-box arcade-cascade-in"
              style={{ "--stat-accent": accent, "--cascade-index": 3 + i }}
            >
              {st.kicker && (
                <span className="arcade-stat-kicker">{st.kicker}</span>
              )}
              <span className="arcade-stat-num" style={{ color: accent }}>
                {st.num}
              </span>
              <span className="arcade-stat-lbl">{st.label}</span>
              {st.detail && <span className="arcade-stat-detail">{st.detail}</span>}
            </div>
          ))}
        </div>
      )}

      <div
        className="arcade-info-block arcade-cascade-in"
        style={{ borderLeftColor: accent, "--cascade-index": missionI }}
      >
        <div className="arcade-info-label" style={{ color: accent }}>
          MISSION
        </div>
        {Array.isArray(exp.missionPoints) && exp.missionPoints.length > 0 ? (
          <ul
            className="arcade-mission-list"
            style={{ "--mission-accent": accent }}
          >
            {exp.missionPoints.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        ) : (
          <p className="arcade-info-text">{exp.about}</p>
        )}
      </div>

      {exp.technologies?.length > 0 && (
        <div
          className="arcade-tag-row arcade-cascade-in"
          style={{ "--cascade-index": tagI }}
        >
          {exp.technologies.map((t) => (
            <span key={t} className="arcade-tag" style={{ color: accent, borderColor: `${accent}55` }}>
              {t}
            </span>
          ))}
        </div>
      )}

      {exp.relatedProjectsResolved?.length > 0 && (
        <div
          className="arcade-info-block arcade-cascade-in"
          style={{ borderLeftColor: accent, "--cascade-index": linkedI }}
        >
          <div className="arcade-info-label" style={{ color: accent }}>
            LINKED SHOWROOM BUILDS
          </div>
          <div className="arcade-tag-row">
            {exp.relatedProjectsResolved.map((name) => (
              <span key={name} className="arcade-tag arcade-tag--gold">
                {name}
              </span>
            ))}
          </div>
        </div>
      )}

      {bars.length > 0 && (
        <div className="arcade-bars arcade-cascade-in" style={{ "--cascade-index": barsI }}>
          {bars.map((b, i) => (
            <div key={i} className="arcade-bar-row">
              <div className="arcade-bar-lbl">{b.label}</div>
              <div className="arcade-bar-track">
                <div className="arcade-bar-fill" style={{ width: `${b.pct}%`, background: accent }} />
              </div>
            </div>
          ))}
        </div>
      )}

      {screens.length > 0 && (
        <div className="arcade-shot-section arcade-cascade-in" style={{ "--cascade-index": shotsI }}>
          <div className="arcade-info-label" style={{ color: accent }}>
            SCREENSHOTS
          </div>
          <div className="arcade-shot-grid">
            {screens.slice(0, 6).map((src, i) => (
              <button
                key={`${src}-${i}`}
                type="button"
                className="arcade-shot-tile"
                onClick={() => onOpenGallery(screens)}
              >
                <img src={src} alt={`${exp.company} frame ${i + 1}`} />
              </button>
            ))}
          </div>
          <button type="button" className="arcade-btn arcade-btn--inline" onClick={() => onOpenGallery(screens)}>
            Open full gallery
          </button>
        </div>
      )}
    </div>
  );
}
