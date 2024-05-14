"use client";

import { translate } from "@/cms/Translate";
import { texts } from "@/cms/texts";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { Project } from "@/components/Project/Project";
import clsx from "clsx";
import styles from "./styles.module.css";

const ProjectsPage = () => {
  return (
    <div className={clsx("relative min-h-screen w-screen", styles.woodenBg)}>
      <Navbar title={translate(texts.home.projects)} />
      <div className="mx-[10%] my-[5vh] grid w-[80%] grid-cols-4 justify-between gap-4">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
