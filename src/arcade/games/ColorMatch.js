import { useState, useEffect, useCallback, useMemo } from "react";
import "./ColorMatch.css";

const ROUNDS = 5;
const MEMORIZE_SEC = 5;

function randomTarget() {
  return {
    h: Math.round(Math.random() * 360),
    s: Math.round(35 + Math.random() * 65),
    b: Math.round(28 + Math.random() * 57),
  };
}

function hsvToRgb(h, s, v) {
  const S = s / 100;
  const V = v / 100;
  const C = V * S;
  const X = C * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = V - C;
  let r = 0;
  let g = 0;
  let b = 0;
  if (h >= 0 && h < 60) [r, g, b] = [C, X, 0];
  else if (h < 120) [r, g, b] = [X, C, 0];
  else if (h < 180) [r, g, b] = [0, C, X];
  else if (h < 240) [r, g, b] = [0, X, C];
  else if (h < 300) [r, g, b] = [X, 0, C];
  else [r, g, b] = [C, 0, X];
  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  };
}

/** sRGB 0–255 → CIELAB (D65). Same pipeline as sRGB/hex. */
function srgb8ToLab(r, g, b) {
  const lin = (c) => {
    const u = c / 255;
    return u <= 0.04045 ? u / 12.92 : ((u + 0.055) / 1.055) ** 2.4;
  };
  const R = lin(r);
  const G = lin(g);
  const B = lin(b);
  const X = R * 0.4124564 + G * 0.3575761 + B * 0.1804375;
  const Y = R * 0.2126729 + G * 0.7151522 + B * 0.072175;
  const Z = R * 0.0193339 + G * 0.119192 + B * 0.9503041;
  const Xn = 0.95047;
  const Yn = 1.0;
  const Zn = 1.08883;
  const f = (t) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);
  return {
    L: 116 * f(Y / Yn) - 16,
    a: 500 * (f(X / Xn) - f(Y / Yn)),
    b: 200 * (f(Y / Yn) - f(Z / Zn)),
  };
}

function deltaE76(lab1, lab2) {
  const dL = lab1.L - lab2.L;
  const da = lab1.a - lab2.a;
  const db = lab1.b - lab2.b;
  return Math.sqrt(dL * dL + da * da + db * db);
}

function rgbString(h, s, v) {
  const { r, g, b } = hsvToRgb(h, s, v);
  return `rgb(${r},${g},${b})`;
}

/** 0 = identical colors; 100+ = very different. Map with exponential decay. Larger = more forgiving. */
const DELTA_E_SCORE_DECAY = 15;

function roundScore(target, user) {
  const t = hsvToRgb(target.h, target.s, target.b);
  const u = hsvToRgb(user.h, user.s, user.b);
  const dE = deltaE76(srgb8ToLab(t.r, t.g, t.b), srgb8ToLab(u.r, u.g, u.b));
  const score = 100 * Math.exp(-dE / DELTA_E_SCORE_DECAY);
  return Math.max(0, Math.min(100, Math.round(score)));
}

function snark(score) {
  if (score >= 90) return "Perfect. Put that on your portfolio.";
  if (score >= 70) return "Strong eye. Designers would approve.";
  if (score >= 48) return "Solid. Keep dialing.";
  if (score >= 28) return "Serviceable. Put that on your résumé.";
  return "Keep practicing — your next dial will be closer.";
}

function formatHsb(h, s, b) {
  return `H${Math.round(h)} S${Math.round(s)} B${Math.round(b)}`;
}

export default function ColorMatch() {
  const [phase, setPhase] = useState("idle");
  const [roundNum, setRoundNum] = useState(1);
  const [target, setTarget] = useState(() => randomTarget());
  const [user, setUser] = useState({ h: 180, s: 55, b: 50 });
  const [memorizeLeft, setMemorizeLeft] = useState(MEMORIZE_SEC);
  const [lastScore, setLastScore] = useState(0);
  const [roundScores, setRoundScores] = useState([]);

  const preview = useMemo(() => rgbString(user.h, user.s, user.b), [user]);
  const targetColor = useMemo(() => rgbString(target.h, target.s, target.b), [target]);

  const satTrackColor = useMemo(() => rgbString(user.h, 100, user.b), [user.h, user.b]);
  const briTrackTop = useMemo(() => rgbString(user.h, user.s, 100), [user.h, user.s]);

  useEffect(() => {
    if (phase !== "memorize") return undefined;
    let sec = MEMORIZE_SEC;
    setMemorizeLeft(sec);
    const id = setInterval(() => {
      sec -= 1;
      if (sec <= 0) {
        clearInterval(id);
        setMemorizeLeft(0);
        setUser({ h: 180, s: 50, b: 50 });
        setPhase("recall");
      } else {
        setMemorizeLeft(sec);
      }
    }, 1000);
    return () => clearInterval(id);
  }, [phase, roundNum, target]);

  const startGame = () => {
    setRoundNum(1);
    setRoundScores([]);
    setTarget(randomTarget());
    setPhase("memorize");
  };

  const startNextRound = useCallback(() => {
    if (roundNum >= ROUNDS) {
      setPhase("final");
      return;
    }
    const next = roundNum + 1;
    setRoundNum(next);
    setTarget(randomTarget());
    setPhase("memorize");
  }, [roundNum]);

  const submitDial = () => {
    const sc = roundScore(target, user);
    setLastScore(sc);
    setRoundScores((prev) => [...prev, sc]);
    setPhase("result");
  };

  /* Track gradients run top → bottom as min → max (hue 0° at top; sat/bri low at top). */
  const thumbTop = (v, max) => `${(v / max) * 100}%`;

  if (phase === "idle") {
    return (
      <div className="dialed">
        <div className="dialed__bar">
          <span className="dialed__brand">Color dial</span>
          <div className="dialed__nav">
            <strong>color</strong>
            <span>·</span>
            <span>arcade</span>
          </div>
        </div>
        <div className="dialed__idle">
          <h2>Remember the swatch. Dial it back.</h2>
          <p>
            Inspired by minimalist color trainers — study the color, then match hue, saturation, and
            brightness with the sliders.
          </p>
          <button type="button" className="dialed__btn-primary" onClick={startGame}>
            Start
          </button>
        </div>
        <div className="dialed__footer">Portfolio mini-game · {ROUNDS} rounds</div>
      </div>
    );
  }

  if (phase === "final") {
    const avg =
      roundScores.length > 0
        ? Math.round(roundScores.reduce((a, b) => a + b, 0) / roundScores.length)
        : 0;
    return (
      <div className="dialed">
        <div className="dialed__bar">
          <span className="dialed__brand">Color dial</span>
          <div className="dialed__nav">
            <strong>done</strong>
          </div>
        </div>
        <div className="dialed__final">
          <h2>Session average</h2>
          <div className="dialed__big-score">{avg}</div>
          <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "0 0 20px" }}>{snark(avg)}</p>
          <button
            type="button"
            className="dialed__btn-primary"
            onClick={() => {
              setPhase("idle");
              setRoundScores([]);
            }}
          >
            Play again
          </button>
        </div>
        <div className="dialed__footer">Color dial · {ROUNDS} rounds</div>
      </div>
    );
  }

  if (phase === "memorize") {
    return (
      <div className="dialed">
        <div className="dialed__bar">
          <span className="dialed__brand">Color dial</span>
          <div className="dialed__nav">
            <strong>color</strong>
            <span>·</span>
            <span>memorize</span>
          </div>
        </div>
        <div className="dialed__stage">
          <div
            className="dialed__card dialed__card--full"
            style={{ "--card-bg": targetColor, background: targetColor }}
          >
            <div className="dialed__card-inner">
              <span className="dialed__round">
                {roundNum} / {ROUNDS}
              </span>
              <div className="dialed__memorize-center">
                <span className="dialed__count">{memorizeLeft}</span>
                <span className="dialed__count-label">Seconds to remember</span>
              </div>
            </div>
          </div>
        </div>
        <div className="dialed__footer">Study the color — sliders unlock when time hits 0.</div>
      </div>
    );
  }

  if (phase === "recall") {
    return (
      <div className="dialed">
        <div className="dialed__bar">
          <span className="dialed__brand">Color dial</span>
          <div className="dialed__nav">
            <strong>color</strong>
            <span>·</span>
            <span>dial</span>
          </div>
        </div>
        <div className="dialed__stage">
          <div className="dialed__card">
            <div className="dialed__card-inner" style={{ paddingTop: 12 }}>
              <span className="dialed__round">
                {roundNum} / {ROUNDS}
              </span>
              <div className="dialed__recall">
                <div className="dialed__sliders">
                  <div className="dialed__slider-col">
                    <span className="dialed__slider-label">Hue</span>
                    <div className="dialed__slider-track dialed__slider-track--hue">
                      <span
                        className="dialed__slider-thumb"
                        style={{ top: thumbTop(user.h, 360) }}
                      />
                      <input
                        type="range"
                        className="dialed__slider-input"
                        min={0}
                        max={360}
                        value={user.h}
                        onChange={(e) => setUser((u) => ({ ...u, h: Number(e.target.value) }))}
                        aria-label="Hue"
                      />
                    </div>
                  </div>
                  <div className="dialed__slider-col">
                    <span className="dialed__slider-label">Sat</span>
                    <div
                      className="dialed__slider-track dialed__slider-track--sat"
                      style={{ "--sat-preview": satTrackColor }}
                    >
                      <span
                        className="dialed__slider-thumb"
                        style={{ top: thumbTop(user.s, 100) }}
                      />
                      <input
                        type="range"
                        className="dialed__slider-input"
                        min={0}
                        max={100}
                        value={user.s}
                        onChange={(e) => setUser((u) => ({ ...u, s: Number(e.target.value) }))}
                        aria-label="Saturation"
                      />
                    </div>
                  </div>
                  <div className="dialed__slider-col">
                    <span className="dialed__slider-label">Bri</span>
                    <div
                      className="dialed__slider-track dialed__slider-track--bri"
                      style={{ "--bri-preview": briTrackTop }}
                    >
                      <span
                        className="dialed__slider-thumb"
                        style={{ top: thumbTop(user.b, 100) }}
                      />
                      <input
                        type="range"
                        className="dialed__slider-input"
                        min={0}
                        max={100}
                        value={user.b}
                        onChange={(e) => setUser((u) => ({ ...u, b: Number(e.target.value) }))}
                        aria-label="Brightness"
                      />
                    </div>
                  </div>
                </div>
                <div className="dialed__preview" style={{ background: preview }}>
                  <span className="dialed__round" style={{ color: "rgba(0,0,0,0.45)" }}>
                    {roundNum} / {ROUNDS}
                  </span>
                  <button type="button" className="dialed__submit" onClick={submitDial} aria-label="Submit match">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <circle cx="12" cy="12" r="9" />
                      <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dialed__footer">Match H · S · B as closely as you can.</div>
      </div>
    );
  }

  if (phase === "result") {
    return (
      <div className="dialed">
        <div className="dialed__bar">
          <span className="dialed__brand">Color dial</span>
          <div className="dialed__nav">
            <strong>color</strong>
            <span>·</span>
            <span>result</span>
          </div>
        </div>
        <div className="dialed__stage">
          <div className="dialed__card">
            <div className="dialed__card-inner" style={{ padding: 12 }}>
              <div className="dialed__result-split">
                <div
                  className="dialed__result-half dialed__result-half--yours"
                  style={{ background: preview }}
                >
                  <span className="dialed__round" style={{ color: "rgba(255,255,255,0.7)" }}>
                    {roundNum} / {ROUNDS}
                  </span>
                  <div className="dialed__result-meta">Your selection</div>
                  <div className="dialed__result-hsb">{formatHsb(user.h, user.s, user.b)}</div>
                  <div className="dialed__result-score">{(lastScore / 10).toFixed(2)}</div>
                  <div className="dialed__snark">{snark(lastScore)}</div>
                </div>
                <div
                  className="dialed__result-half dialed__result-half--target"
                  style={{ background: targetColor }}
                >
                  <div className="dialed__result-meta">Original</div>
                  <div className="dialed__result-hsb">{formatHsb(target.h, target.s, target.b)}</div>
                  <button
                    type="button"
                    className="dialed__next"
                    onClick={startNextRound}
                    aria-label={roundNum >= ROUNDS ? "Finish" : "Next round"}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dialed__footer">Round score · next arrow to continue</div>
      </div>
    );
  }

  return null;
}
