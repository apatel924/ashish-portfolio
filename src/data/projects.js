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
    description: "Quiz Arena is an interactive quiz platform...",
    technologies: [
      "React.js",
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Socket.io",
      "Expo",
      "Storybook",
      "Jest",
      "Sentry",
      "Tailwind CSS",
      "Material UI",
      "Apple Development",
    ],
    link: "https://linktr.ee/quizarena",
    // Use your imported images
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
    ],
  },
  {
    title: "Remote-Together",
    description: "Remote-Together is a platform that helps...",
    technologies: [
      "Google Maps API",
      "React.js",
      "Material UI",
      "Tailwind CSS",
      "Axios",
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
    description: "Resource-Wall is a Pinterest-inspired platform...",
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
    description: "Interview Scheduler is a robust React application...",
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
