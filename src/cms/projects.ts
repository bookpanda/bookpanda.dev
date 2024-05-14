type LangChoice = { en: string; jp: string };

export interface ProjectInst {
  title: LangChoice;
  description: LangChoice;
  stack: string[];
  date: Date;
  image: string;
  url: string[];
}

export const projectList: ProjectInst[] = [
  {
    title: {
      en: "",
      jp: "",
    },
    description: {
      en: "",
      jp: "",
    },
    stack: [],
    date: new Date(2023, 5),
    image: "",
    url: [""],
  },
  {
    title: {
      en: "anime-stats",
      jp: "アニメスタッツ",
    },
    description: {
      en: "When engineering managers are recruiting, if they happen to have the same taste as you, you're in luck. So you'd better not rate objectively mid stuffs (e.g. SAO 😭) more than 8.",
      jp: "エンジニアリングマネージャーが採用を行う際、あなたと同じ趣味を持っている場合、あなたは幸運です。 ですから、客観的に中程度のもの (例: SAO 😭) を 8 よりも高く評価しない方がよいでしょう。",
    },
    stack: ["github-actions", "GraphQL"],
    date: new Date(2024, 4),
    image: "animeStats.webp",
    url: ["https://github.com/bookpanda/anime-stats"],
  },
  {
    title: {
      en: "angryfern",
      jp: "怒っているフェルン",
    },
    description: {
      en: "try clicking it fast enough, then something will happen",
      jp: "十分に速くクリックしてみてください、それから何かが起こります。",
    },
    stack: ["React", "Redux", "Go", "gin", "postgreSQL"],
    date: new Date(2024, 3),
    image: "angryfern.webp",
    url: [
      "https://github.com/bookpanda/angryfern-frontend",
      "https://github.com/bookpanda/angryfern-backend",
    ],
  },
  {
    title: {
      en: "Lyrics2Anki",
      jp: "歌詞2Anki",
    },
    description: {
      en: "Makes Japanese Anki cards from ANY Spotify lyrics.",
      jp: "Spotifyの歌詞から日本語のAnkiカードを作成します。",
    },
    stack: ["React", "AWS-Lambda", "Python", "tokenizer"],
    date: new Date(2024, 2),
    image: "lyrics2anki.webp",
    url: [
      "https://github.com/bookpanda/Lyrics2Anki",
      "https://github.com/bookpanda/lyrics2anki-tokenizer",
    ],
  },
  {
    title: {
      en: "mite-kure",
      jp: "見てくれ",
    },
    description: {
      en: "Aaaahhh look at this! generator",
      jp: "ああぁぁぁぁ　見てくれ！ ジェネレーター",
    },
    stack: ["React", "react-player"],
    date: new Date(2023, 9),
    image: "miteKure.gif",
    url: ["https://github.com/bookpanda/mite-kure"],
  },
  {
    title: {
      en: "PraeAksornSimulator",
      jp: "PraeAksornシミュレータ",
    },
    description: {
      en: "PraeAksorn Simulator is inspired by real-life card stunt, which involves assembling a large number of colored papers together to form an image. The objective of this game is to allow you to experience card stunts and form an image within a time limit.",
      jp: "「PraeAksornシミュレータ」は、多数の色紙を組み合わせて画像を形成する実際のカード スタントからインスピレーションを得ています。 このゲームの目的は、制限時間内にカードスタントを体験し、イメージを形成することです。",
    },
    stack: ["Java", "JavaFX"],
    date: new Date(2023, 5),
    image: "praeAksornSim.webp",
    url: ["https://github.com/bookpanda/PraeAksornSimulator"],
  },
  {
    title: {
      en: "intania-department-calculator",
      jp: "インタニア部門計算機",
    },
    description: {
      en: "Calculates your likelihood of getting into your desired engineering departments in Chulalongkorn University.",
      jp: "チュラロンコン大学の理工学部門に入る可能性を計算します。",
    },
    stack: ["React", "material-ui"],
    date: new Date(2023, 5),
    image: "intaniaCal.webp",
    url: ["https://github.com/bookpanda/intania-department-calculator"],
  },
  {
    title: {
      en: "AutoPraeAksorn",
      jp: "自動式PraeAksorn",
    },
    description: {
      en: "This webapp will help create 'Kradat Tak' or instructions on what color to flip for each person in order to orchestrate card stunts. You can turn virtually any image into 'Kradat Tak'.",
      jp: "このウェブアプリは、カードスタントを演出するために、各人がどの色をフリップするかに関する指示である「クラダットタック」を作成するのに役立ちます。 ほとんどの画像を「クラダットタック」に変換できます。",
    },
    stack: ["React", "Python", "Flask"],
    date: new Date(2023, 2),
    image: "autoPraeAksorn.webp",
    url: ["https://github.com/bookpanda/AutoPraeAksorn"],
  },
];
