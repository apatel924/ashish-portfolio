import { useState, useEffect, useRef } from "react";

export default function QuizGame({
  questions,
  accent,
  timed = true,
  title = "QUIZ ARENA",
  subtitle,
}) {
  const [phase, setPhase] = useState("idle");
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(10);
  const timerRef = useRef(null);

  const advance = (nextIdx, nextScore) => {
    setSelected(null);
    if (nextIdx >= questions.length) {
      setScore(nextScore);
      setPhase("result");
    } else {
      setIdx(nextIdx);
      setTimeLeft(10);
    }
  };

  useEffect(() => {
    if (phase !== "playing" || !timed) return undefined;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          setSelected(-1);
          setTimeout(() => advance(idx + 1, score), 700);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
    // advance uses idx/score intentionally snapshot-style per question (timer tick)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, idx, timed, score, questions.length]);

  const handleAnswer = (i) => {
    if (selected !== null) return;
    clearInterval(timerRef.current);
    const isCorrect = i === questions[idx].a;
    const newScore = score + (isCorrect ? 1 : 0);
    setSelected(i);
    setTimeout(() => advance(idx + 1, newScore), 900);
    if (phase === "playing") setScore(newScore);
  };

  const start = () => {
    setPhase("playing");
    setIdx(0);
    setScore(0);
    setSelected(null);
    setTimeLeft(10);
  };

  const q = questions[idx];
  const total = questions.length;
  const verdicts = [
    "Keep practicing!",
    "Not bad!",
    "Good work!",
    "Great score!",
    "Perfect! Hired!",
  ];
  const verdictIdx = Math.min(
    Math.round((score / total) * (verdicts.length - 1)),
    verdicts.length - 1
  );

  return (
    <div className="game-wrap">
      {phase === "idle" && (
        <div className="game-center">
          <div className="game-title" style={{ color: accent }}>
            {title}
          </div>
          <div className="game-sub">
            {subtitle ?? `${total} questions · ${timed ? "10 sec each" : "untimed"}`}
          </div>
          <button
            type="button"
            className="game-start-btn"
            style={{ borderColor: accent, color: accent }}
            onClick={start}
          >
            INSERT COIN
          </button>
        </div>
      )}

      {phase === "playing" && q && (
        <div className="quiz-wrap">
          <div className="quiz-meta">
            <span>
              Q {idx + 1} / {total}
            </span>
            <span style={{ color: accent }}>Score: {score}</span>
            {timed && (
              <span style={{ color: timeLeft <= 3 ? "#ff6b9d" : accent }}>{timeLeft}s</span>
            )}
          </div>
          <div className="quiz-question">{q.q}</div>
          <div className="quiz-grid">
            {q.opts.map((opt, i) => {
              let cls = "quiz-opt";
              if (selected !== null) {
                if (i === q.a) cls += " correct";
                else if (i === selected) cls += " wrong";
              }
              return (
                <button
                  key={i}
                  type="button"
                  className={cls}
                  style={selected === null ? { "--hover-color": accent } : {}}
                  onClick={() => handleAnswer(i)}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {phase === "result" && (
        <div className="game-center">
          <div className="game-title" style={{ color: accent }}>
            GAME OVER
          </div>
          <div className="result-score" style={{ color: accent }}>
            {score} / {total}
          </div>
          <div className="result-sub">{verdicts[verdictIdx]}</div>
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
