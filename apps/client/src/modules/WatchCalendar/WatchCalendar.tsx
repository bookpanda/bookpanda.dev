import { Tooltip } from "@mui/material";
import clsx from "clsx";
import { useAppContext } from "src/core/contexts";

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
  const { completedData, selectedAnime, selectedYear, setSelectedAnime } =
    useAppContext();
  const calendar = processData(completedData);
  const a = [];
  for (let i = 1; i <= 365; i++) {
    a.push(i);
  }
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
                    "h-4 w-4 rounded-sm border border-gray-400"
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
