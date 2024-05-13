"use client";

import { translate } from "@/cms/Translate";
import { texts } from "@/cms/texts";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import clsx from "clsx";
import styles from "./styles.module.css";

const ProjectsPage = () => {
  return (
    <div className={clsx("relative w-screen", styles.gradientBg)}>
      <Navbar title={translate(texts.home.projects)} />
      <div className="mx-[10%] my-[5vh] h-[150vh] bg-red-100"></div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
