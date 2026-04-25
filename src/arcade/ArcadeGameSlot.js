import React from "react";
import TypeRacer from "./games/TypeRacer";
import ReactionTest from "./games/ReactionTest";
import QuizGame from "./games/QuizGame";
import ColorMatch from "./games/ColorMatch";
import AimTraining from "./games/AimTraining";
import {
  QUIZ_QUESTIONS,
  QUIZ_ARENA_QUESTIONS,
  ABOUT_QUESTIONS,
  OPTIVUE_CRM_QUESTIONS,
} from "../data/arcadeGamesData";
import "./ArcadeMiniGames.css";

const DEFAULT_ACCENT = "#3cf2c8";

/**
 * Maps `game.kind` from arcadeRevamp.content.js to a playable mini-game.
 */
export default function ArcadeGameSlot({ game }) {
  const accent = game?.accent || DEFAULT_ACCENT;
  const kind = game?.kind;

  const inner = (() => {
    switch (kind) {
      case "hourblock_dashboard_pulse":
        return (
          <ReactionTest
            accent={accent}
            title={game.pickTitle || "REACTION TEST"}
            subtitle={
              game.playSubtitle ?? "Dashboard reflexes — 5 rounds, click on GO."
            }
          />
        );
      case "hourblock_stack_sprint":
        return (
          <TypeRacer
            accent={accent}
            title={game.pickTitle || "STACK SPRINT"}
            subtitle={game.playSubtitle ?? "How fast can you type code tokens?"}
          />
        );
      case "hourblock_integration_quiz":
        return (
          <QuizGame
            questions={QUIZ_QUESTIONS}
            accent={accent}
            timed
            title={game.quizTitle || game.pickTitle || "CONTRACT CHECK"}
            subtitle={
              game.playSubtitle ??
              "Stack trivia — APIs, React, and production patterns."
            }
          />
        );
      case "hourblock_quiz_rush":
        return (
          <QuizGame
            questions={QUIZ_QUESTIONS}
            accent={accent}
            timed
            title={game.quizTitle || game.pickTitle || "QUIZ RUSH"}
            subtitle={
              game.playSubtitle ??
              "Timed trivia — stack patterns, APIs, and shipping tradeoffs."
            }
          />
        );
      case "hourblock_color_match":
        return <ColorMatch />;
      case "gamercoach_reaction":
        return (
          <ReactionTest
            accent={accent}
            title={game.pickTitle || "REACTION TEST"}
            subtitle={
              game.playSubtitle ??
              "Five rounds — click when you see GO. Same reflexes as shipping motion-heavy UX on deadline."
            }
          />
        );
      case "quiz_arena_tap_battle":
        return (
          <QuizGame
            questions={QUIZ_ARENA_QUESTIONS}
            accent={accent}
            timed
            title={game.quizTitle || game.pickTitle || "QUIZ ARENA"}
            subtitle={
              game.playSubtitle ??
              "Hooks, React Native, and how we shipped multiple game modes — 10 sec per question."
            }
          />
        );
      case "optivue_clinic_flow":
        return (
          <QuizGame
            questions={OPTIVUE_CRM_QUESTIONS}
            accent={accent}
            timed
            title={game.quizTitle || game.pickTitle || "CLINIC FLOW"}
            subtitle={
              game.playSubtitle ??
              "CRM, charting, and office rhythm — 10 sec per question."
            }
          />
        );
      case "expense_trend_runner":
        return (
          <TypeRacer
            accent={accent}
            title={game.pickTitle || "TYPE RACER"}
            subtitle={game.playSubtitle}
          />
        );
      case "gamercoach_calendar_quest":
        return <ColorMatch />;
      case "bright_vision_aim":
        return (
          <AimTraining
            accent={accent}
            title={game.pickTitle || "AIM DRILL"}
            subtitle={
              game.playSubtitle ??
              "30 seconds — hover every dart target you can. See where you land on the board."
            }
          />
        );
      case "about_player_quiz":
        return (
          <QuizGame
            questions={ABOUT_QUESTIONS}
            accent={accent}
            timed={false}
            title="PLAYER QUIZ"
          />
        );
      default:
        return (
          <div className="game-wrap">
            <div className="game-center">
              <div className="game-title" style={{ color: accent }}>
                COMING SOON
              </div>
              <div className="game-sub">This cabinet does not have a mapped game yet.</div>
            </div>
          </div>
        );
    }
  })();

  const cleanSkin = kind === "gamercoach_calendar_quest";
  const isColorMatch =
    kind === "hourblock_color_match" || kind === "gamercoach_calendar_quest";

  const outerClass = [
    "arcade-game-outer",
    cleanSkin ? "arcade-game-outer--dialed" : "",
    isColorMatch ? "arcade-game-outer--color-match" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={outerClass}>
      {!cleanSkin && <div className="arcade-game-scanlines" aria-hidden />}
      <div className={`arcade-game-mini${cleanSkin ? " arcade-game-mini--dialed" : ""}`}>{inner}</div>
    </div>
  );
}
