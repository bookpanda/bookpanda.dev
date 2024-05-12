import { texts } from "@/cms/texts";
import { CmsText, translate } from "@/cms/translate";
import clsx from "clsx";
import Link from "next/link";
import styles from "./styles.module.css";

const Home = () => {
  const language = "jp";
  const text = (input: CmsText) => translate(input, language);

  return (
    <div className={clsx("h-screen w-screen", styles.gradientBg)}>
      <div className="flex h-full w-full flex-col items-end justify-center pr-[5%]">
        <h1 className="text-lg text-white">
          <Link href="https://www.bookpanda.dev/">bookpanda.dev</Link>
        </h1>
        <p className="text-white">
          <Link href="https://resume.bookpanda.dev/" target="_blank">
            {text(texts.home.resume)}
          </Link>
        </p>
        <p className="text-white">
          <Link href="/projects" target="_blank">
            {text(texts.home.projects)}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
