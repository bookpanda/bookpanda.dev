import { GetCompletedAnimeQueryResult } from "@bookpanda/codegen";
import { selectedAnimeType } from "src/core/contexts/appContext";

type CalendarType = {
  date: Date;
  anime: selectedAnimeType[];
  color: string;
}[];

export const processData = (data: GetCompletedAnimeQueryResult | null) => {
  const dataList = data?.data?.MediaListCollection?.lists;
  if (dataList) {
    const entries = dataList[0]?.entries;
    if (entries) {
      const calendar: CalendarType = initCalendar();
      for (let i = 0; i < entries.length; i++) {
        const st = entries[i]?.startedAt;
        const stDate = new Date(
          st?.year ?? 1969,
          st?.month ? st.month - 1 : 1,
          st?.day ?? 1
        );
        const ed = entries[i]?.completedAt;
        const edDate = new Date(
          ed?.year ?? 1969,
          ed?.month ? ed.month - 1 : 1,
          ed?.day ?? 1
        );
        const media = entries[i]?.media;
        const score = entries[i]?.score ?? 0;
        const name = media?.title?.english ?? media?.title?.userPreferred ?? "";
        const image = media?.coverImage?.large ?? "";
        const color = media?.coverImage?.color ?? "#ffffff";
        const cur = new Date(stDate);
        while (cur <= edDate) {
          calendar[daysDiff(new Date(2022, 0, 1), cur)].anime.push({
            name,
            image,
            st: stDate,
            ed: edDate,
            score,
          });

          if (calendar[daysDiff(new Date(2022, 0, 1), cur)].color === "")
            calendar[daysDiff(new Date(2022, 0, 1), cur)].color = color;
          cur.setDate(cur.getDate() + 1);
        }
      }
      return calendar;
    }
  }
  return null;
};

function initCalendar() {
  const cal: CalendarType = [];
  const stDate = new Date(2022, 0, 1);
  const now = new Date();
  const edDate = new Date(now.getFullYear(), 11, 31);
  const cur = new Date(stDate);
  while (cur <= edDate) {
    cal.push({ date: new Date(cur), anime: [], color: "" });
    cur.setDate(cur.getDate() + 1);
  }
  return cal;
}

function daysDiff(st: Date, ed: Date) {
  const diffTime = Math.abs(ed.getTime() - st.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
