import { translate } from "@/cms/Translate";
import { texts } from "@/cms/texts";
import Link from "next/link";
import { FC } from "react";
import { FaHome } from "react-icons/fa";
import { PickLang } from "../PickLang/PickLang";
import { Button } from "../ui/button";

interface NavbarProps {
  title: string;
}

export const Navbar: FC<NavbarProps> = ({ title }) => {
  return (
    <nav className="sticky top-0 z-10 flex h-14 w-screen items-center justify-between bg-[#47474770] pl-4 lg:pl-[20%]">
      <div className="flex w-[70%]">
        <div className="flex w-[50%] items-center">
          <h1 className="text-xl text-white">{title}</h1>
        </div>
        <div className="flex w-[50%] justify-end">
          <Link href="/">
            <Button variant="ghost" className="hover:bg-[#47474720]">
              <FaHome className="mr-3 h-6 w-6 text-white" />
              <h2 className="text-white">{translate(texts.navbar.home)}</h2>
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex w-[30%] justify-end pr-8">
        <PickLang />
      </div>
    </nav>
  );
};
