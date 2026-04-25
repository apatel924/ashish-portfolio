import { useState, useEffect, useRef, useCallback } from "react";
import { TYPER_WORDS } from "../../data/arcadeGamesData";

function pickWords(n = 8) {
  const pool = [...TYPER_WORDS].sort(() => Math.random() - 0.5);
  return pool.slice(0, n);
}

export default function TypeRacer({
  accent,
  title = "TYPE RACER",
  subtitle = "How fast can you type code tokens?",
}) {
  const [phase, setPhase] = useState("idle");
  const [words, setWords] = useState([]);
  const [idx, setIdx] = useState(0);
  const [wordResult, setWordResult] = useState([]);
  const [input, setInput] = useState("");
  const [correct, setCorrect] = useState(0);
  const [total, setTotal] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [wpm, setWpm] = useState(0);
  const timerRef = useRef(null);
  const inputRef = useRef(null);

  const end = useCallback((corr, tot, sec) => {
    clearInterval(timerRef.current);
    const elapsed = 30 - sec || 1;
    setWpm(Math.round(corr / (elapsed / 60)));
    setPhase("result");
  }, []);

  const start = useCallback(() => {
    clearInterval(timerRef.current);
    const w = pickWords(10);
    setWords(w);
    setIdx(0);
    setWordResult(Array(w.length).fill(null));
    setInput("");
    setCorrect(0);
    setTotal(0);
    setTimeLeft(30);
    setWpm(0);
    setPhase("playing");
    setTimeout(() => inputRef.current?.focus(), 50);

    let sec = 30;
    timerRef.current = setInterval(() => {
      sec -= 1;
      setTimeLeft(sec);
      if (sec <= 0) {
        clearInterval(timerRef.current);
        setCorrect((c) => {
          setTotal((t) => {
            end(c, t, 0);
            return t;
          });
          return c;
        });
      }
    }, 1000);
  }, [end]);

  useEffect(() => () => clearInterval(timerRef.current), []);

  const handleInput = (e) => {
    const val = e.target.value;
    if (!val.endsWith(" ")) {
      setInput(val);
      return;
    }
    const typed = val.trim();
    const isCorrect = typed === words[idx];
    const newCorrect = correct + (isCorrect ? 1 : 0);
    const newTotal = total + 1;
    const lineDone = idx + 1 >= words.length;

    setWordResult((prev) => {
      const next = [...prev];
      next[idx] = { expected: words[idx], typed, ok: isCorrect };
      return next;
    });
    setCorrect(newCorrect);
    setTotal(newTotal);
    setInput("");

    const elapsed = 30 - timeLeft || 1;
    setWpm(Math.round(newCorrect / (elapsed / 60)));

    if (lineDone) {
      setTimeout(() => {
        const nextLine = pickWords(10);
        setWords(nextLine);
        setIdx(0);
        setWordResult(Array(nextLine.length).fill(null));
        setTimeout(() => inputRef.current?.focus(), 50);
      }, 0);
    } else {
      setIdx(idx + 1);
    }
  };

  const acc = total > 0 ? Math.round((correct / total) * 100) : 100;

  const lineTransition =
    wordResult.length > 0 &&
    wordResult.length === words.length &&
    wordResult.every((r) => r != null);

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
            START GAME
          </button>
        </div>
      )}

      {phase === "playing" && (
        <div className="typer-wrap">
          <div className="typer-stats">
            <span>
              WPM:{" "}
              <strong style={{ color: accent }}>{wpm}</strong>
            </span>
            <span>
              Time:{" "}
              <strong style={{ color: accent }}>{timeLeft}s</strong>
            </span>
            <span>
              Acc:{" "}
              <strong style={{ color: accent }}>{acc}%</strong>
            </span>
          </div>
          <div className="typer-display">
            {words.map((w, i) => {
              const r = wordResult[i];
              if (r) {
                if (r.ok) {
                  return (
                    <span key={`${i}-${w}`} className="tw-word tw-ok">
                      {r.expected}{" "}
                    </span>
                  );
                }
                return (
                  <span
                    key={`${i}-${r.expected}`}
                    className="tw-word tw-err"
                    title={`Expected “${r.expected}”, you typed “${r.typed}”`}
                    aria-label={`Expected ${r.expected}, typed ${r.typed}`}
                  >
                    <span className="tw-expected" aria-hidden="true">
                      {r.expected}
                    </span>
                    <span className="tw-actual">{r.typed}</span>{" "}
                  </span>
                );
              }
              const isCurrent = i === idx;
              if (isCurrent) {
                return (
                  <span key={`cur-${i}-${w}`} className="tw-word tw-current">
                    {w}
                    <span className="tw-cursor" />
                    {" "}
                  </span>
                );
              }
              return (
                <span key={`wait-${i}-${w}`} className="tw-word tw-waiting">
                  {w}{" "}
                </span>
              );
            })}
          </div>
          <input
            ref={inputRef}
            className="typer-input"
            value={input}
            onChange={handleInput}
            placeholder="start typing..."
            autoComplete="off"
            spellCheck={false}
            readOnly={lineTransition}
          />
        </div>
      )}

      {phase === "result" && (
        <div className="game-center">
          <div className="game-title" style={{ color: accent }}>
            RESULTS
          </div>
          <div className="result-score" style={{ color: accent }}>
            {wpm} WPM
          </div>
          <div className="result-sub">Accuracy: {acc}%</div>
          <button
            type="button"
            className="game-start-btn"
            style={{ borderColor: accent, color: accent }}
            onClick={start}
          >
            PLAY AGAIN
          </button>
        </div>
      )}
    </div>
  );
}
