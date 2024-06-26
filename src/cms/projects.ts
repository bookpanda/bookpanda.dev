type LangChoice = { en: string; jp: string };

export interface ProjectInst {
  title: LangChoice;
  description: LangChoice;
  type: "personal" | "team";
  stack: string[];
  date: Date;
  image: string;
  url: string[];
}

export const projectList: ProjectInst[] = [
  // {
  //   title: {
  //     en: "",
  //     jp: "",
  //   },
  //   description: {
  //     en: "",
  //     jp: "",
  //   },
  //   type: "personal",
  //   stack: [],
  //   date: new Date(2023, 5),
  //   image: "",
  //   url: [""],
  // },
  {
    title: {
      en: "anime-stats",
      jp: "アニメスタッツ",
    },
    description: {
      en: "When engineering managers are recruiting, if they happen to have the same taste as you, you're in luck.",
      jp: "エンジニアリングマネージャーが採用を行う際、あなたと同じ趣味を持っている場合、あなたは幸運です。",
    },
    type: "personal",
    stack: ["github-actions", "GraphQL"],
    date: new Date(2024, 4),
    image: "animeStats.webp",
    url: ["https://github.com/bookpanda/anime-stats"],
  },
  {
    title: {
      en: "samlam-bot",
      jp: "サムラムボット",
    },
    description: {
      en: "Making a bot with the personality of that one friend who always has something to say without filters.",
      jp: "常にフィルターなしで何かを言うあの友達の性格を持つボットを作成する。",
    },
    type: "personal",
    stack: [],
    date: new Date(2024, 4),
    image: "samlamBot.webp",
    url: ["https://github.com/bookpanda/samlam-bot"],
  },
  {
    title: {
      en: "Johnjud (backend)",
      jp: "Johnjud（バックエンド）",
    },
    description: {
      en: "Johnjud-backend handles data management and business logic for the Johnjud project.",
      jp: "Johnjud-backend は、Johnjud プロジェクトのデータ管理とビジネスロジックを処理します。",
    },
    type: "team",
    stack: ["Go", "gRPC", "postgreSQL", "redis", "minio"],
    date: new Date(2024, 3),
    image: "johnjudBackend.webp",
    url: ["https://github.com/isd-sgcu/johnjud-backend"],
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
    type: "personal",
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
    type: "personal",
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
      en: "snapping-thoughts",
      jp: "頭が痛いほどの思想",
    },
    description: {
      en: "Twitter bot that tweets a random shower thought from the list of quotes every 24 hours.",
      jp: "引用リストからランダムなシャワーの思考をツイートする Twitter ボット。",
    },
    type: "personal",
    stack: ["Go", "AWS-Lambda", "DynamoDB", "Twitter API"],
    date: new Date(2023, 12),
    image: "snappingThoughts.webp",
    url: ["https://github.com/bookpanda/snapping-thoughts"],
  },
  {
    title: {
      en: "MyGraderList",
      jp: "マイグレーダーリスト",
    },
    description: {
      en: "MyGraderList is a web app for assessing the difficulties of each DSA grader problem.",
      jp: "MyGraderList は、各 DSA グレーダー問題の難易度を評価するための Web アプリです。",
    },
    type: "personal",
    stack: ["React", "Go", "gRPC", "mySQL", "redis"],
    date: new Date(2023, 11),
    image: "myGraderList.webp",
    url: ["https://github.com/bookpanda/mygraderlist"],
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
    type: "personal",
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
      en: "PraeAksorn Simulator is based on real-life card stunt, which basically is flipping colored papers together to form an image.",
      jp: "PraeAksornシミュレータは、基本的には画像を形成するために一緒に色付きの紙を反転させるリアルなカードスタントに基づいています。",
    },
    type: "team",
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
      en: "Calculates your likelihood of getting into your desired engineering departments.",
      jp: "大学の理工学部門に入る可能性を計算します。",
    },
    type: "personal",
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
      en: "This webapp will help create instructions on what color to flip to orchestrate card stunts. You can use any image.",
      jp: "この Web アプリは、カードスタントを演出するためにどの色を反転させるかについての指示を作成するのに役立ちます。 どの画像でも使用できます。",
    },
    type: "personal",
    stack: ["React", "Python", "Flask"],
    date: new Date(2023, 2),
    image: "autoPraeAksorn.webp",
    url: ["https://github.com/bookpanda/AutoPraeAksorn"],
  },
  {
    title: {
      en: "remu-goro-nekoka",
      jp: "レムゴロネコカ",
    },
    description: {
      en: "Just pat her head.",
      jp: "彼女の頭を撫でてください。",
    },
    type: "personal",
    stack: ["React", "react-player"],
    date: new Date(2023, 2),
    image: "remuNekoka.gif",
    url: ["https://github.com/bookpanda/remu-goro-nekoka"],
  },
];
