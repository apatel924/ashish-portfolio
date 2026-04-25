import { useState, useRef, useCallback } from "react";

const ROUNDS = 5;

function verdict(avg) {
  if (avg < 200) return "Lightning reflexes!";
  if (avg < 280) return "Above average!";
  if (avg < 380) return "Average response";
  return "Keep practicing!";
}

export default function ReactionTest({
  accent,
  title = "REACTION TEST",
  subtitle = "Five rounds — click when you see GO.",
}) {
  const [phase, setPhase] = useState("idle");
  const [round, setRound] = useState(0);
  const [times, setTimes] = useState([]);
  const [tooEarly, setTooEarly] = useState(false);
  const startRef = useRef(null);
  const timeoutRef = useRef(null);

  const triggerReady = useCallback(() => {
    setPhase("ready");
    startRef.current = Date.now();
  }, []);

  const nextRound = useCallback(() => {
    setTooEarly(false);
    setPhase("waiting");
    clearTimeout(timeoutRef.current);
    const delay = 1500 + Math.random() * 2500;
    timeoutRef.current = setTimeout(() => triggerReady(), delay);
  }, [triggerReady]);

  const handleStart = () => {
    setTimes([]);
    setRound(1);
    nextRound();
  };

  const handleClick = () => {
    if (phase === "waiting") {
      clearTimeout(timeoutRef.current);
      setTooEarly(true);
      setPhase("tooearly");
      setTimeout(() => {
        setPhase("waiting");
        setTooEarly(false);
        nextRound();
      }, 800);
      return;
    }
    if (phase !== "ready") return;

    const ms = Date.now() - startRef.current;
    const newTimes = [...times, ms];
    setTimes(newTimes);

    if (round >= ROUNDS) {
      setPhase("result");
    } else {
      setRound((r) => r + 1);
      nextRound();
    }
  };

  const avg = times.length ? Math.round(times.reduce((a, b) => a + b, 0) / times.length) : 0;
  const best = times.length ? Math.min(...times) : 0;

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
            onClick={handleStart}
          >
            START GAME
          </button>
        </div>
      )}

      {(phase === "waiting" || phase === "ready" || phase === "tooearly") && (
        <div className="game-center">
          <div className="rt-meta">
            Round{" "}
            <strong style={{ color: accent }}>{round}</strong> / {ROUNDS}
            {times.length > 0 && (
              <>
                {" "}
                · Best:{" "}
                <strong style={{ color: accent }}>{best}ms</strong>
              </>
            )}
          </div>
          <div className="rt-msg" style={{ color: tooEarly ? "#ff6b9d" : "#888" }}>
            {tooEarly ? "Too early! Wait..." : phase === "ready" ? "Click NOW!" : "Wait for green..."}
          </div>
          <button
            type="button"
            className="rt-circle"
            style={{
              borderColor: phase === "ready" ? accent : "#2e2c44",
              background: phase === "ready" ? accent : "transparent",
              color: phase === "ready" ? "#000" : "#555",
              cursor: phase === "ready" ? "pointer" : "default",
            }}
            onClick={handleClick}
          >
            {phase === "ready" ? "NOW!" : "WAIT"}
          </button>
        </div>
      )}

      {phase === "result" && (
        <div className="game-center">
          <div className="game-title" style={{ color: accent }}>
            SCORE
          </div>
          <div className="result-score" style={{ color: accent }}>
            {avg}ms avg
          </div>
          <div className="result-sub">{verdict(avg)}</div>
          <div className="rt-splits">
            {times.map((t, i) => (
              <span key={i} style={{ color: t === best ? accent : "#555" }}>
                R{i + 1}: {t}ms
              </span>
            ))}
          </div>
          <button
            type="button"
            className="game-start-btn"
            style={{ borderColor: accent, color: accent }}
            onClick={handleStart}
          >
            TEST AGAIN
          </button>
        </div>
      )}
    </div>
  );
}
