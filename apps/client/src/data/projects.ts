import {
  aniTimeline,
  autoPraeAksorn,
  bookpandaDev,
  intaniaCal,
  lyrics2Anki,
  remuNekoka,
  thai2kana,
  thincHackToSchool,
} from "public/images";

export const projects = [
  {
    name: "Lyrics2Anki",
    details: "Makes Japanese Anki cards from ANY Spotify lyrics",
    url: "https://lyrics2anki.vercel.app/",
    github: "https://github.com/bookpanda/Lyrics2Anki",
    image: lyrics2Anki,
  },
  {
    name: "bookpanda.dev",
    details: "My personal website as gallery for my projects and resume.",
    url: "https://bookpanda.dev",
    github: "https://github.com/bookpanda/bookpanda.dev",
    image: bookpandaDev,
  },
  {
    name: "Intania Department Calculator",
    details:
      "Calculates your grades to assess your chance of getting into desired engineering department.",
    url: "https://intania-department-calculator.vercel.app",
    github: "https://github.com/bookpanda/intania-department-calculator",
    image: intaniaCal,
  },
  {
    name: "AutoPraeAksorn",
    details:
      "Automatically turns images into card stunts (Prae Aksorn), inspired by Jaturamitr card stunts.",
    url: "https://auto-prae-aksorn-client.vercel.app",
    github: "https://github.com/bookpanda/AutoPraeAksorn",
    image: autoPraeAksorn,
  },
  {
    name: "Thinc's 1-week Hack to School",
    details:
      "Make an education platform app within a week. My job in the team was making frontend.",
    url: "https://kita.cunny.dev",
    github: "https://github.com/thinc-org/hacktoschool-kitakita",
    image: thincHackToSchool,
  },
  {
    name: "レム　ゴロゴロ　猫か",
    details: "Make her happy by moving your mouse over her head!",
    url: "https://remu-goro-nekoka.vercel.app",
    github: "https://github.com/bookpanda/remu-goro-nekoka",
    image: remuNekoka,
  },
  {
    name: "AniTimeline",
    details:
      "A webapp that shows data from the AniList's public API by user's ID.",
    url: "https://ani-timeline-client.vercel.app",
    github: "https://github.com/bookpanda/AniTimeline",
    image: aniTimeline,
  },
  {
    name: "Thai2Kana",
    details:
      "A program that tries to convert the Thai language into Katakana script.",
    url: "https://thai2-kana-client.vercel.app",
    github: "https://github.com/bookpanda/Thai2Kana",
    image: thai2kana,
  },
];
