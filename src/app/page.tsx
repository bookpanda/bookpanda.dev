"use client";

import { translate } from "@/cms/Translate";
import { texts } from "@/cms/texts";
import { PickLang } from "@/components/PickLang/PickLang";
import clsx from "clsx";
import Link from "next/link";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <div className={clsx("h-screen w-screen", styles.gradientBg)}>
      <div className="flex h-16 w-screen items-center justify-end pr-8">
        <PickLang />
      </div>
      <div className="flex h-[calc(100vh-4rem)] w-full flex-col items-end justify-center pr-[5%]">
        <h1 className="text-lg text-white">
          <Link href="/">bookpanda.dev</Link>
        </h1>
        <p className="text-white hover:underline">
          <Link href="https://resume.bookpanda.dev/" target="_blank">
            {translate(texts.home.resume)}
          </Link>
        </p>
        <p className="text-white hover:underline">
          <Link href="/projects">{translate(texts.home.projects)}</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
