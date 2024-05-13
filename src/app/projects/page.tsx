"use client";

import { Navbar } from "@/components/Navbar/Navbar";
import clsx from "clsx";
import styles from "./styles.module.css";

const ProjectsPage = () => {
  return (
    <div className={clsx("relative h-screen w-screen", styles.gradientBg)}>
      <Navbar title="Projects" />
    </div>
  );
};

export default ProjectsPage;
