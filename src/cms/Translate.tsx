"use client";

import { selectLang } from "@/components/PickLang/languageSlice";
import { useAppSelector } from "@/store/hooks";

export interface CmsText {
  en: string;
  jp: string;
}

export const translate = (text: CmsText) => {
  const language = useAppSelector((state) => selectLang(state));

  if (language === "jp") return text.jp;
  return text.en;
};
