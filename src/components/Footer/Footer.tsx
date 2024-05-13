import { ANILIST_URL, GITHUB_URL } from "@/app/constants/constants";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { FaGithub } from "react-icons/fa";
import { SiAnilist } from "react-icons/si";

interface SocialIconProps extends PropsWithChildren {
  readonly url: string;
}

const SocialIcon: FC<SocialIconProps> = ({ children, url }) => (
  <div className="hover:cursor-pointer">
    <Link href={url} target="_blank">
      {children}
    </Link>
  </div>
);

export const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <nav className="sticky top-0 flex h-14 w-screen items-center justify-between bg-[#474747] pl-[20%]">
      <div className="flex w-[70%]">
        <h2 className="text-white">{`© ${thisYear} bookpanda.dev`}</h2>
      </div>
      <div className="justify-begin flex w-[30%] space-x-4">
        <SocialIcon url={GITHUB_URL}>
          <FaGithub className="mr-3 h-6 w-6 text-white" />
        </SocialIcon>
        <SocialIcon url={ANILIST_URL}>
          <SiAnilist className="mr-3 h-6 w-6 text-white" />
        </SocialIcon>
      </div>
    </nav>
  );
};
