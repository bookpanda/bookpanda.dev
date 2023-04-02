import { Tooltip, useMediaQuery } from "@mui/material";
import clsx from "clsx";
import { useAppContext } from "src/core/contexts";
import { theme } from "src/theme";

import { processData } from "./processData";

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const WatchCalendar = () => {
  const breakXL = useMediaQuery(theme.breakpoints.up("xl"));
  const { completedData, selectedAnime, selectedYear, setSelectedAnime } =
    useAppContext();
  const calendar = processData(completedData);
  return (
    <div className="grid w-full grid-flow-col grid-rows-7 gap-1">
      {calendar &&
        calendar
          .filter((c) => c.date.getFullYear() === selectedYear)
          .map((d) => {
            console.log(d.color);

            return (
              <Tooltip
                arrow
                placement="top"
                title={`${d.date.getDate()} ${
                  monthNames[d.date.getMonth()]
                }, ${d.date.getFullYear()}`}
                key={d.date.getTime()}
              >
                <div
                  className={clsx(
                    selectedAnime?.name === d.anime[0]?.name
                      ? "opacity-100"
                      : "opacity-50",
                    d.anime.length === 0 ? "rounded-xl" : "rounded-sm",
                    "h-4 w-4 border border-gray-400",
                    breakXL ? "h-4 w-4" : "h-3 w-3"
                  )}
                  style={{
                    backgroundColor: d.color !== "" ? d.color : "transparent",
                  }}
                  onClick={() => setSelectedAnime(d.anime[0])}
                  role="presentation"
                ></div>
              </Tooltip>
            );
          })}
    </div>
  );
};
