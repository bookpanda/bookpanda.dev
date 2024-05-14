type LangChoice = { en: string; jp: string };

export interface ProjectInst {
  title: LangChoice;
  description: LangChoice;
  stack: string[];
  date: Date;
  image: string;
  url: string;
}

export const projectList: ProjectInst[] = [
  {
    title: {
      en: "PraeAksornSimulator",
      jp: "PraeAksornSimulator",
    },
    description: {
      en: "PraeAksorn Simulator is inspired by real-life card stunt, which involves assembling a large number of colored papers together to form an image. The objective of this game is to allow you to experience card stunts and form an image within a time limit.",
      jp: "PraeAksorn Simulator は、多数の色紙を組み合わせて画像を形成する実際のカード スタントからインスピレーションを得ています。 このゲームの目的は、制限時間内にカードスタントを体験し、イメージを形成することです。",
    },
    stack: ["Java", "JavaFX"],
    date: new Date(2023, 5),
    image: "praeAksornSim.webp",
    url: "https://github.com/bookpanda/PraeAksornSimulator",
  },
];
