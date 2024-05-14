"use client";

import { translate } from "@/cms/Translate";
import { ProjectInst } from "@/cms/projects";
import { texts } from "@/cms/texts";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { Project } from "@/components/Project/Project";
import { selectProjects } from "@/components/Project/projectSlice";
import { useAppSelector } from "@/store/hooks";
import clsx from "clsx";
import { FC } from "react";
import styles from "./styles.module.css";

interface ProjectsGridProps {
  projects: ProjectInst[];
}

const ProjectsGrid: FC<ProjectsGridProps> = ({ projects }) => (
  <div className="mx-[10%] my-[2vh] grid w-[80%] grid-cols-4 justify-between gap-4">
    {projects.map((project) => (
      <Project key={project.image} project={project} />
    ))}
  </div>
);

const ProjectsPage = () => {
  const projects = useAppSelector((state) => selectProjects(state));
  const personalProjects = projects.filter(
    (project) => project.type === "personal"
  );
  const teamProjects = projects.filter((project) => project.type === "team");
  return (
    <div className={clsx("relative min-h-screen w-screen", styles.woodenBg)}>
      <Navbar title={translate(texts.home.projects)} />
      <h2 className="mx-[10%] mt-10 text-2xl font-bold">
        {translate(texts.projects.team)}
      </h2>
      <ProjectsGrid projects={teamProjects} />
      <h2 className="mx-[10%] mt-10 text-2xl font-bold">
        {translate(texts.projects.personal)}
      </h2>
      <ProjectsGrid projects={personalProjects} />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
