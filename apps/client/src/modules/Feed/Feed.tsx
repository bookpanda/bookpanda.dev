import { Typography } from "@mui/material";
import clsx from "clsx";
import { FC } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from "./Feed.module.scss";
import { FeedSlider } from "./FeedSlider";

export const Feed: FC = () => {
  return (
    <div className={clsx("mb-20 h-[57vh] w-full", styles.feed)}>
      <Typography variant="h4" fontWeight={600} marginBottom={2}>
        Projects
      </Typography>
      <div className="mt-6 h-[25vh] w-full">
        <FeedSlider />
      </div>
    </div>
  );
};
