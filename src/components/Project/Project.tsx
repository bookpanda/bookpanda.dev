"use client";

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
      <div className="absolute flex h-full w-full flex-col justify-between rounded-md bg-[#000000b4] p-2 opacity-0 duration-300 ease-in-out hover:opacity-100">
        <div>
          <h2 className="mb-4 text-xl text-white">{project.title}</h2>
          <p className="text-md text-white">{project.description}</p>
        </div>
        <div className="flex w-full justify-end pb-4 pr-4 hover:cursor-pointer">
          <Link href={project.url} target="_blank">
            <FaGithub className="h-8 w-8 text-white" />
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
        <h2 className="text-lg text-white">{project.title}</h2>
      </div>
    </div>
  );
};
