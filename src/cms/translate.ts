export interface CmsText {
  en: string;
  jp: string;
}

export const translate = (text: CmsText, lang: string) => {
  if (lang === "jp") return text.jp;
  return text.en;
};
