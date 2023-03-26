import { GetBannerQueryResult } from "@bookpanda/codegen";

export const processData = (data: GetBannerQueryResult | null) => {
  const dataList = data?.data?.MediaListCollection?.lists;
  if (dataList) {
    const entries = dataList[0]?.entries;
    if (entries) {
      const entriesLen = entries.length;
      const randomIdx = Math.floor(Math.random() * entriesLen);
      return entries[randomIdx];
    }
    return null;
  }
  return null;
};
