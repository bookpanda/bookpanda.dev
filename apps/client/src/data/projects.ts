import {
  aniTimeline,
  autoPraeAksorn,
  intaniaCal,
  remuNekoka,
  thai2kana,
} from "public/images";

export const projects = [
  {
    name: "Intania Department Calculator",
    details:
      "Calculates your grades to assess your chance of getting into desired engineering department.",
    url: "https://intania-department-calculator.vercel.app",
    image: intaniaCal,
  },
  {
    name: "レム　ゴロゴロ　猫か",
    details: "Make her happy by moving your mouse over her head!",
    url: "https://remu-goro-nekoka.vercel.app",
    image: remuNekoka,
  },
  {
    name: "AutoPraeAksorn",
    details:
      "Automatically turns images into card stunts (Prae Aksorn), inspired by Jaturamitr card stunts.",
    url: "https://auto-prae-aksorn-client.vercel.app",
    image: autoPraeAksorn,
  },
  {
    name: "AniTimeline",
    details:
      "A webapp that shows data from the AniList's public API by user's ID.",
    url: "https://ani-timeline-client.vercel.app",
    image: aniTimeline,
  },
  {
    name: "Thai2Kana",
    details:
      "A program that tries to convert the Thai language into Katakana script.",
    url: "https://thai2-kana-client.vercel.app",
    image: thai2kana,
  },
  //   {
  //     name: "Thinc's 1-week Hack to School Project (Frontend)",
  //     details:
  //       "Make an education platform app within a week. My job in the team was making frontend.",
  //     url: "kita.cunny.dev",
  //     image: "/images/1.png",
  //   },
  //   {
  //     name: "Thinc's 10-day Project (Frontend)",
  //     details:
  //       "Make a group project within 10 days. My team made a productivity app for creating tasks and doing pomodoro (I made the frontend).",
  //     url: "github.com/Leomotors/producktivity",
  //     image: "/images/1.png",
  //   },
  //   {
  //     name: "WanchanBERTa-Thai-Grammarly",
  //     details:
  //       "NLP project using WanchanBERTa to correct misspelled Thai words. Dataset used is VISTEC-TP-TH-2021 dataset.",
  //     url: "github.com/bookpanda/WanchanBERTa-Thai-Grammarly",
  //     image: "/images/1.png",
  //   },
];
