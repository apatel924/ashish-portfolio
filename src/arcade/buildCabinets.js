/**
 * Normalized “cabinet” rows for the arcade dashboard (sidebar + main panel).
 */

const DEFAULT_EMOJI = {
  hourblock: "📊",
  "quiz-arena": "🎯",
  "expense-trend": "💰",
  gamercoach: "🎮",
  "bright-vision": "🏬",
  optivue: "👁️",
};

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  if (h.length !== 6) return "24, 24, 40";
  return `${parseInt(h.slice(0, 2), 16)}, ${parseInt(h.slice(2, 4), 16)}, ${parseInt(h.slice(4, 6), 16)}`;
}

export function accentBg(accent) {
  return `rgba(${hexToRgb(accent)}, 0.12)`;
}

function gameNameForLabel(row, i) {
  if (row.title) return row.title;
  if (row.pickTitle) {
    return row.pickTitle
      .toLowerCase()
      .split(/[\s_]+/)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }
  return `Game ${i + 1}`;
}

/** Playable entries for the overlay: optional `games[]` in content, else single `game`. */
export function normalizePlayGames(exp) {
  const base = exp.game;
  const rows =
    Array.isArray(exp.games) && exp.games.length > 0
      ? exp.games.map((g) => ({ ...base, ...g }))
      : base
        ? [base]
        : [];
  return rows.map((row, i) => ({
    ...row,
    accent: row.accent ?? base?.accent ?? "#3cf2c8",
    pickTitle: row.pickTitle ?? row.title ?? `GAME ${i + 1}`,
    pickBlurb: row.pickBlurb ?? "",
    employer: exp.company,
    pickerLabel: row.pickerLabel ?? `${exp.company} - ${gameNameForLabel(row, i)}`,
  }));
}

export function buildCabinets({ experiencesResolved, meta, projectsData }) {
  const jobs = experiencesResolved.map((exp) => {
    const accent = exp.game?.accent ?? "#3cf2c8";
    const stackHint =
      exp.technologies?.length > 0
        ? exp.technologies.slice(0, 4).join(" · ")
        : exp.title || "Full stack";
    return {
      id: exp.id,
      kind: "experience",
      name: exp.company,
      type: exp.title,
      emoji: DEFAULT_EMOJI[exp.id] ?? "💼",
      accent,
      accentBg: accentBg(accent),
      sub: `${exp.period} · ${stackHint}`,
      experience: exp,
      playGames: normalizePlayGames(exp),
    };
  });

  const aboutAccent = "#a8ff78";
  const aboutGame = {
    kind: "about_player_quiz",
    title: "Profile Quiz",
    accent: aboutAccent,
    pickTitle: "PROFILE QUIZ",
    pickBlurb: "How well do you know this player?",
    employer: "About",
    pickerLabel: "About - Profile Quiz",
    marqueeSub:
      "A quick self-check on this portfolio, roles, and how the shipped work maps to the cabinets and games you see here.",
  };
  const playerCabinet = {
    id: "player-about",
    kind: "about",
    name: "About Me",
    type: "Player profile",
    emoji: "👾",
    accent: aboutAccent,
    accentBg: accentBg(aboutAccent),
    sub: meta.heroTagline,
    meta,
    game: aboutGame,
    playGames: [aboutGame],
  };

  const projectsAccent = "#e8b84a";
  const projectsCabinet = {
    id: "project-showroom",
    kind: "projects",
    name: "Projects",
    type: "Shipped builds",
    emoji: "🗂️",
    accent: projectsAccent,
    accentBg: accentBg(projectsAccent),
    sub: `${projectsData.length} apps · screenshots + links`,
    projectsData,
    game: null,
    playGames: [],
  };

  const lobbyAccent = "#9d7dff";
  const allPlayGames = [];
  for (const job of jobs) {
    for (const g of job.playGames) {
      allPlayGames.push({
        ...g,
        pickBlurb:
          g.pickBlurb && g.pickBlurb.length > 0
            ? g.pickBlurb
            : `From the ${job.name} cabinet — ${job.type}`,
      });
    }
  }
  for (const g of playerCabinet.playGames) {
    allPlayGames.push({
      ...g,
      pickBlurb: g.pickBlurb || "How well do you know this player?",
    });
  }

  const allGamesLobby = {
    id: "all-games-lobby",
    kind: "all_games",
    name: "All games",
    type: "Mini-game select",
    emoji: "🕹️",
    accent: lobbyAccent,
    accentBg: accentBg(lobbyAccent),
    sub: "Pick any mini-game from the floor",
    experience: null,
    playGames: allPlayGames,
  };

  return [...jobs, projectsCabinet, playerCabinet, allGamesLobby];
}

/** Shown in the sidebar: hide the virtual “all games” row (start menu + Play use it). */
export function isCabinetInSidebar(cab) {
  return cab.id !== "all-games-lobby";
}
