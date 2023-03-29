import { projects } from "$data/projects";
import { Typography } from "@mui/material";
import clsx from "clsx";
import { FC } from "react";

import styles from "./Feed.module.scss";
import { FeedItem } from "./FeedItem";

export const Feed: FC = () => {
  return (
    <div className={clsx("w-full bg-red-100", styles.feed)}>
      <Typography variant="h4" fontWeight={600}>
        Projects
      </Typography>
      <div className="feed mt-4 flex w-full bg-green-100">
        {projects.map((proj) => {
          return (
            <FeedItem
              key={proj.name}
              name={proj.name}
              desc={proj.details}
              url={proj.url}
              image={proj.image}
            />
          );
        })}
      </div>
    </div>
  );
};
