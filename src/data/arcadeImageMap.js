/**
 * Maps `arcadeRevamp.content.js` image paths (relative to src/images/) to bundled URLs.
 */
import linkedinImg from "../images/linkedin-img.jpeg";

import QaDiscover from "../images/Qa-Images/Discover-page.png";
import QaLeaderboard from "../images/Qa-Images/Flat-app-preview-1.png";
import QaProfile from "../images/Qa-Images/Flat-app-preview.png";
import QaQuiz from "../images/Qa-Images/Leaderboard-page.png";
import QaSettings from "../images/Qa-Images/Play-page.png";
import QaSolo from "../images/Qa-Images/You-lost-page.png";
import QaIMG9187 from "../images/Qa-Images/IMG_9187.PNG";
import QaIMG9188 from "../images/Qa-Images/IMG_9188.PNG";
import QaIMG9189 from "../images/Qa-Images/IMG_9189.PNG";
import QaIMG9190 from "../images/Qa-Images/IMG_9190.PNG";
import QaIMG9191 from "../images/Qa-Images/IMG_9191.PNG";
import QaIMG9192 from "../images/Qa-Images/IMG_9192.PNG";
import QaIMG9193 from "../images/Qa-Images/IMG_9193.PNG";
import QaIMG9194 from "../images/Qa-Images/IMG_9194.PNG";
import QaIMG9195 from "../images/Qa-Images/IMG_9195.PNG";

import Remote1 from "../images/Remote-together-Images/Remote-together-1.png";
import Remote2 from "../images/Remote-together-Images/Remote-together-2.png";
import Remote3 from "../images/Remote-together-Images/Remote-together-3.png";
import Remote4 from "../images/Remote-together-Images/Remote-together-4.png";

import RW1 from "../images/Resource-Wall-Images/Resource-Wall-1.png";
import RW2 from "../images/Resource-Wall-Images/Resource-Wall-2.png";
import RW3 from "../images/Resource-Wall-Images/Resource-Wall-3.png";
import RW4 from "../images/Resource-Wall-Images/Resource-Wall-4.png";

import IS1 from "../images/Interview-scheduler-Images/Scheduler-add-appt.png";
import IS2 from "../images/Interview-scheduler-Images/Scheduler-added-appt.png";
import IS3 from "../images/Interview-scheduler-Images/scheduler-delete-appt.png";
import IS4 from "../images/Interview-scheduler-Images/scheduler-main-page.png";

export const arcadeImageMap = {
  "linkedin-img.jpeg": linkedinImg,
  "Qa-Images/Discover-page.png": QaDiscover,
  "Qa-Images/Flat-app-preview-1.png": QaLeaderboard,
  "Qa-Images/Flat-app-preview.png": QaProfile,
  "Qa-Images/Leaderboard-page.png": QaQuiz,
  "Qa-Images/Play-page.png": QaSettings,
  "Qa-Images/You-lost-page.png": QaSolo,
  "Qa-Images/IMG_9187.PNG": QaIMG9187,
  "Qa-Images/IMG_9188.PNG": QaIMG9188,
  "Qa-Images/IMG_9189.PNG": QaIMG9189,
  "Qa-Images/IMG_9190.PNG": QaIMG9190,
  "Qa-Images/IMG_9191.PNG": QaIMG9191,
  "Qa-Images/IMG_9192.PNG": QaIMG9192,
  "Qa-Images/IMG_9193.PNG": QaIMG9193,
  "Qa-Images/IMG_9194.PNG": QaIMG9194,
  "Qa-Images/IMG_9195.PNG": QaIMG9195,
  "Remote-together-Images/Remote-together-1.png": Remote1,
  "Remote-together-Images/Remote-together-2.png": Remote2,
  "Remote-together-Images/Remote-together-3.png": Remote3,
  "Remote-together-Images/Remote-together-4.png": Remote4,
  "Resource-Wall-Images/Resource-Wall-1.png": RW1,
  "Resource-Wall-Images/Resource-Wall-2.png": RW2,
  "Resource-Wall-Images/Resource-Wall-3.png": RW3,
  "Resource-Wall-Images/Resource-Wall-4.png": RW4,
  "Interview-scheduler-Images/Scheduler-add-appt.png": IS1,
  "Interview-scheduler-Images/Scheduler-added-appt.png": IS2,
  "Interview-scheduler-Images/scheduler-delete-appt.png": IS3,
  "Interview-scheduler-Images/scheduler-main-page.png": IS4,
};

export function getArcadeImage(relativePath) {
  if (!relativePath) return null;
  return arcadeImageMap[relativePath] ?? null;
}

export function resolveExperienceImages(exp) {
  const hero = getArcadeImage(exp.images?.hero);
  const gallery = (exp.images?.gallery ?? [])
    .map((p) => getArcadeImage(p))
    .filter(Boolean);
  const heroThumbUrls = hero ? [hero, ...gallery] : gallery;
  return {
    ...exp,
    heroSrc: hero,
    gallerySrcs: gallery,
    allScreenSrcs: heroThumbUrls,
  };
}

function uniqueConcatUrls(primary, secondary) {
  const seen = new Set();
  const out = [];
  for (const u of [...primary, ...secondary]) {
    if (!u || seen.has(u)) continue;
    seen.add(u);
    out.push(u);
  }
  return out;
}

/**
 * Appends screenshot URLs from `projectsData` when `experience.relatedProjectTitles`
 * matches `project.title` (e.g. "Quiz Arena", "Resource-Wall"). De-duplicates by URL.
 */
export function resolveExperienceWithProjects(exp, projectsData) {
  const base = resolveExperienceImages(exp);
  const titles = exp.relatedProjectTitles ?? [];
  const extraUrls = titles
    .map((title) => projectsData.find((p) => p.title === title))
    .filter(Boolean)
    .flatMap((p) => p.images);

  const merged = uniqueConcatUrls(base.allScreenSrcs, extraUrls);
  const matchedTitles = titles.filter((t) => projectsData.some((p) => p.title === t));

  return {
    ...base,
    allScreenSrcs: merged,
    gallerySrcs: merged,
    heroSrc: merged[0] ?? null,
    relatedProjectsResolved: matchedTitles,
  };
}
