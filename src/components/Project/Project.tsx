"use client";

import { translate } from "@/cms/Translate";
import { ProjectInst } from "@/cms/projects";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FaGithub } from "react-icons/fa";

interface ProjectProps {
  project: ProjectInst;
}

export const Project: FC<ProjectProps> = ({ project }) => {
  return (
    <div className="relative w-full rounded-md bg-[#3a3a3a70] drop-shadow-xl">
      <div className="absolute flex h-full w-full flex-col justify-between rounded-md bg-[#000000b4] p-4 opacity-0 duration-300 ease-in-out hover:opacity-100">
        <div>
          <h2 className="mb-4 text-xl text-white">
            {translate(project.title)}
          </h2>
          <p className="text-md mb-4 text-white">
            {translate(project.description)}
          </p>
          <p className="text-md text-white">
            {project.stack.map((s, idx) => {
              if (idx === project.stack.length - 1) return s;
              return `${s}・`;
            })}
          </p>
        </div>
        <div className="flex w-full justify-end pb-4 pr-4">
          <Link href={project.url} target="_blank">
            <FaGithub className="h-8 w-8 text-white hover:cursor-pointer" />
          </Link>
        </div>
      </div>
      <Image
        src={`/projects/${project.image}`}
        alt="proj_img"
        width={400}
        height={200}
        className="rounded-t-md"
      />
      <div className="w-full px-4">
        <h2 className="text-lg text-white">{translate(project.title)}</h2>
      </div>
    </div>
  );
};
