type LangChoice = { en: string; jp: string };

export interface ProjectInst {
  title: LangChoice;
  description: LangChoice;
  image: string;
  url: string;
}

export const projectList: ProjectInst[] = [
  {
    title: {
      en: "return home",
      jp: "ホームに戻る",
    },
    description: {
      en: "return home",
      jp: "ホームに戻る",
    },
    image: "praeAksornSim.webp",
    url: "",
  },
];
