// Quiz Arena images
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

// Interview Scheduler images
import IS1 from "../images/Interview-scheduler-Images/Scheduler-add-appt.png";
import IS2 from "../images/Interview-scheduler-Images/Scheduler-added-appt.png";
import IS3 from "../images/Interview-scheduler-Images/scheduler-delete-appt.png";
import IS4 from "../images/Interview-scheduler-Images/scheduler-main-page.png";

export const projectsData = [
  {
    title: "Quiz Arena",
    description:
      "An interactive quiz platform designed to provide an engaging user experience. Led the complete redesign and functionality implementation for the solo mode, developed a customizable profile page with React components, and optimized the backend system for efficient image rendering.",
    technologies: [
      "React.js",
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Expo",
    ],
    link: "https://linktr.ee/quizarena",
    thumbnail: QaDiscover,
    images: [
      QaDiscover,
      QaLeaderboard,
      QaProfile,
      QaQuiz,
      QaSettings,
      QaSolo,
      QaIMG9187,
      QaIMG9188,
      QaIMG9189,
      QaIMG9190,
      QaIMG9191,
      QaIMG9192,
      QaIMG9193,
      QaIMG9194,
      QaIMG9195,
    ],
  },
  {
    title: "Remote-Together",
    description:
      "Platform with the ability to find specific remote working locations for workers/students. Able to interact with a built in chat that works like a forum, user login, a map that renders markers with locations of interests and business details dynamically.",
    technologies: [
      "Google Maps API",
      "React.js",
      "Material UI",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Socket.io",
    ],
    link: "https://github.com/apatel924/remote_together",
    thumbnail: Remote1,
    images: [Remote1, Remote2, Remote3, Remote4],
  },
  {
    title: "Resource-Wall",
    description:
      "A Pinterest reconstruct with the ability to create new resource links with details and description, ability to like and favorite as well as favorites page, editing page and new resource page with a home page that has the ability to search through all resources.",
    technologies: [
      "Node.js",
      "PostgreSQL",
      "EJS",
      "Express",
      "Morgan",
      "Sass",
      "bcryptjs",
      "Body-Parser",
      "Cookie-Session",
      "dotenv",
    ],
    link: "https://github.com/roylyh/Resource-Wall",
    thumbnail: RW1,
    images: [RW1, RW2, RW3, RW4],
  },
  {
    title: "Interview Scheduler",
    description:
      "A React app that works as an appointment scheduler with the ability to edit, add and delete appointments on multiple days of the week with multiple testing implemented such as storybook, jest and cypress.",
    technologies: [
      "React",
      "Webpack",
      "Babel",
      "Axios",
      "WebSockets",
      "Storybook",
      "Jest",
      "Testing Library",
    ],
    link: "https://github.com/apatel924/scheduler",
    thumbnail: IS1,
    images: [IS1, IS2, IS3, IS4],
  },
];
