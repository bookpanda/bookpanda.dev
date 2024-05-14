"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import clsx from "clsx";
import { GB, JP } from "country-flag-icons/react/3x2";
import { FC, PropsWithChildren } from "react";

import { Languages, selectLang, setLang } from "./languageSlice";

interface LangChoiceProps extends PropsWithChildren {
  readonly currLang: Languages;
  readonly lang: Languages;
  handleClick: (lang: Languages) => void;
}

const LangChoice: FC<LangChoiceProps> = ({
  children,
  currLang,
  lang,
  handleClick,
}) => (
  <div
    onClick={() => handleClick(lang)}
    className={clsx(
      lang !== currLang && "brightness-50",
      "hover:cursor-pointer"
    )}
  >
    {children}
  </div>
);

export const PickLang = () => {
  const dispatch = useAppDispatch();
  const lang = useAppSelector((state) => selectLang(state));

  const handleClick = (newLang: Languages) => {
    dispatch(setLang(newLang));
  };

  return (
    <div className="flex space-x-3">
      <LangChoice currLang={lang} lang="en" handleClick={handleClick}>
        <GB title="English" className="w-8 rounded-sm " />
      </LangChoice>
      <LangChoice currLang={lang} lang="jp" handleClick={handleClick}>
        <JP title="日本語" className="w-8 rounded-sm" />
      </LangChoice>
    </div>
  );
};
