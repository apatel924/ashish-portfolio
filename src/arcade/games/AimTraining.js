import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import "./AimTraining.css";

const TARGET = 52;
const ROUND_SECONDS = 30;

const NPC_SCORES = [100, 89, 75, 70];

const ALIAS_POOL = [
  "PIXEL_SNPR",
  "CRT_NINJA",
  "ARCADE_OWL",
  "BLIP_RUN",
  "SCANLINE",
  "NEON_KID",
  "COIN_OP_7",
  "EXTRA_LIFE",
  "DMX_RUSH",
  "CRT_LORD",
];

function shufflePickNames(count) {
  const shuffled = [...ALIAS_POOL].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function buildLeaderboard(userHits) {
  const names = shufflePickNames(4);
  const entries = NPC_SCORES.map((score, i) => ({
    score,
    name: names[i],
    isYou: false,
  }));
  entries.push({ score: userHits, name: "You", isYou: true });

  entries.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (a.isYou) return -1;
    if (b.isYou) return 1;
    return 0;
  });

  return entries.map((e, i) => ({
    rank: i + 1,
    score: e.score,
    name: e.name,
    isYou: e.isYou,
  }));
}

/** Short ascending “arcade hit” blip — Web Audio, no asset files. */
function playHitChime(ctx) {
  const now = ctx.currentTime;
  const master = ctx.createGain();
  master.gain.value = 0.11;
  master.connect(ctx.destination);

  const freqs = [740, 988, 1318]; // F#5, B5, E6 — bright, catchy
  freqs.forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    osc.connect(g);
    g.connect(master);
    const t0 = now + i * 0.028;
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(0.45, t0 + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.1);
    osc.start(t0);
    osc.stop(t0 + 0.11);
  });
}

function useHitAudio() {
  const ctxRef = useRef(null);

  const prime = useCallback(() => {
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      if (!ctxRef.current) ctxRef.current = new AC();
      ctxRef.current.resume?.();
      return ctxRef.current;
    } catch {
      return null;
    }
  }, []);

  const playHit = useCallback(() => {
    const ctx = prime();
    if (ctx) playHitChime(ctx);
  }, [prime]);

  useEffect(
    () => () => {
      try {
        ctxRef.current?.close();
      } catch {
        /* ignore */
      }
      ctxRef.current = null;
    },
    []
  );

  return { prime, playHit };
}

const MARGIN = 10;
const MIN_SEP = TARGET * 1.15;

function pickSpot(arenaRect, avoidLocalX, avoidLocalY) {
  const aw = arenaRect.width;
  const ah = arenaRect.height;
  const maxL = Math.max(MARGIN, aw - TARGET - MARGIN);
  const maxT = Math.max(MARGIN, ah - TARGET - MARGIN);

  const tryAvoid = avoidLocalX != null && avoidLocalY != null;

  for (let i = 0; i < 48; i++) {
    const left = MARGIN + Math.random() * Math.max(1, maxL - MARGIN);
    const top = MARGIN + Math.random() * Math.max(1, maxT - MARGIN);
    if (!tryAvoid) return { left, top };
    const cx = left + TARGET / 2;
    const cy = top + TARGET / 2;
    if (Math.hypot(cx - avoidLocalX, cy - avoidLocalY) >= MIN_SEP) {
      return { left, top };
    }
  }

  return {
    left: MARGIN + Math.random() * Math.max(1, maxL - MARGIN),
    top: MARGIN + Math.random() * Math.max(1, maxT - MARGIN),
  };
}

export default function AimTraining({
  accent = "#a8ff78",
  title = "AIM DRILL",
  subtitle = "30 seconds on the clock — hover every dartboard you can.",
}) {
  const [phase, setPhase] = useState("idle");
  const [hits, setHits] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(ROUND_SECONDS);
  const [leaderboard, setLeaderboard] = useState([]);
  const [spot, setSpot] = useState({ left: MARGIN, top: MARGIN });
  const arenaRef = useRef(null);
  const hitsRef = useRef(0);
  const { prime: primeAudio, playHit } = useHitAudio();

  hitsRef.current = hits;

  const placeInitial = useCallback(() => {
    const el = arenaRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.width < TARGET || r.height < TARGET) return;
    setSpot(pickSpot(r, null, null));
  }, []);

  useLayoutEffect(() => {
    if (phase !== "play") return;
    placeInitial();
  }, [phase, placeInitial]);

  useEffect(() => {
    if (phase !== "play") return undefined;
    const id = window.setInterval(() => {
      setSecondsLeft((s) => Math.max(0, s - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, [phase]);

  useEffect(() => {
    if (phase !== "play") return;
    if (secondsLeft > 0) return;
    const score = hitsRef.current;
    setLeaderboard(buildLeaderboard(score));
    setPhase("results");
  }, [phase, secondsLeft]);

  const handlePointerEnterTarget = (e) => {
    const el = arenaRef.current;
    if (!el || phase !== "play" || secondsLeft <= 0) return;
    const r = el.getBoundingClientRect();
    const lx = e.clientX - r.left;
    const ly = e.clientY - r.top;
    playHit();
    setHits((h) => h + 1);
    setSpot(pickSpot(r, lx, ly));
  };

  const start = () => {
    primeAudio();
    setHits(0);
    hitsRef.current = 0;
    setSecondsLeft(ROUND_SECONDS);
    setLeaderboard([]);
    setPhase("play");
  };

  const endRoundEarly = () => {
    if (phase !== "play") return;
    const score = hitsRef.current;
    setLeaderboard(buildLeaderboard(score));
    setPhase("results");
  };

  return (
    <div className="game-wrap">
      {phase === "idle" && (
        <div className="game-center">
          <div className="game-title" style={{ color: accent }}>
            {title}
          </div>
          <div className="game-sub">{subtitle}</div>
          <button
            type="button"
            className="game-start-btn"
            style={{ borderColor: accent, color: accent }}
            onClick={start}
          >
            START
          </button>
        </div>
      )}

      {phase === "play" && (
        <div className="game-center" style={{ width: "100%" }}>
          <div className="aim-arena__meta">
            HITS <strong style={{ color: accent }}>{hits}</strong>
            {" · "}
            TIME{" "}
            <strong style={{ color: accent }}>
              {secondsLeft}s
            </strong>
            {" · "}
            <button
              type="button"
              className="game-start-btn aim-arena__end"
              style={{ borderColor: accent, color: accent }}
              onClick={endRoundEarly}
            >
              END
            </button>
          </div>
          <div
            ref={arenaRef}
            className="aim-arena"
            style={{ "--aim-accent": accent }}
          >
            <div
              className="aim-dart"
              style={{ left: spot.left, top: spot.top }}
              onPointerEnter={handlePointerEnterTarget}
              role="presentation"
              aria-hidden
            >
              <span className="aim-dart__flights" />
              <span className="aim-dart__shaft" />
              <span className="aim-dart__ring" />
              <span className="aim-dart__bull" />
            </div>
          </div>
          <div className="game-sub" style={{ marginTop: 6 }}>
            {ROUND_SECONDS} seconds — lock onto the dartboard as many times as you can.
          </div>
        </div>
      )}

      {phase === "results" && (
        <div
          className="game-center aim-results"
          style={{ width: "100%", "--aim-accent": accent }}
        >
          <div className="game-title" style={{ color: accent }}>
            LEADERBOARD
          </div>
          <div className="game-sub aim-results__sub">
            Run finished ·{" "}
            <strong style={{ color: accent }}>
              {hits} hit{hits === 1 ? "" : "s"}
            </strong>
          </div>
          <ul className="aim-lb" aria-label="Scoreboard">
            {leaderboard.map((row) => (
              <li
                key={`${row.rank}-${row.isYou ? "you" : row.name}`}
                className={`aim-lb__row${row.isYou ? " aim-lb__row--you" : ""}`}
              >
                <span className="aim-lb__rank">{row.rank}</span>
                <span className="aim-lb__line">
                  {row.isYou
                    ? `You -> ${row.score}`
                    : `${row.name} -> ${row.score}`}
                </span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="game-start-btn"
            style={{ borderColor: accent, color: accent, marginTop: 8 }}
            onClick={start}
          >
            REPLAY
          </button>
        </div>
      )}
    </div>
  );
}
