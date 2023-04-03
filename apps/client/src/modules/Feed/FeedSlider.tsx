import { projects } from "$data/projects";
import { useMediaQuery } from "@mui/material";
import clsx from "clsx";
import { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { theme } from "src/theme";

import styles from "./Feed.module.scss";
import { FeedItem } from "./FeedItem";
import { groupData } from "./groupData";

export const FeedSlider: FC = () => {
  const breakLG = useMediaQuery(theme.breakpoints.up("lg"));
  const breakSM = useMediaQuery(theme.breakpoints.up("sm"));
  if (breakLG) {
    const groupedProjects = groupData(projects, 4);

    return (
      <Carousel
        infiniteLoop
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        autoPlay
        transitionTime={700}
        interval={6000}
      >
        {groupedProjects.map((proj) => {
          return (
            <div
              key={proj[0].name}
              className={clsx("flex w-full justify-center", styles.feed)}
            >
              <FeedItem key={proj[0].name} prop={proj[0]} />
              {proj.length > 1 && (
                <FeedItem key={proj[1].name} prop={proj[1]} />
              )}
              {proj.length > 2 && (
                <FeedItem key={proj[2].name} prop={proj[2]} />
              )}
              {proj.length > 3 && (
                <FeedItem key={proj[3].name} prop={proj[3]} />
              )}
            </div>
          );
        })}
      </Carousel>
    );
  } else if (breakSM) {
    const groupedProjects = groupData(projects, 2);
    return (
      <Carousel
        infiniteLoop
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        autoPlay
        transitionTime={700}
        interval={6000}
      >
        {groupedProjects.map((proj) => {
          return (
            <div
              key={proj[0].name}
              className={clsx("flex w-full justify-center", styles.feed)}
            >
              <FeedItem key={proj[0].name} prop={proj[0]} />
              {proj.length > 1 && (
                <FeedItem key={proj[1].name} prop={proj[1]} />
              )}
            </div>
          );
        })}
      </Carousel>
    );
  } else {
    const groupedProjects = groupData(projects, 1);
    return (
      <Carousel
        infiniteLoop
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        autoPlay
        transitionTime={700}
        interval={6000}
      >
        {groupedProjects.map((proj) => {
          return (
            <div
              key={proj[0].name}
              className={clsx("flex w-full justify-center", styles.feed)}
            >
              <FeedItem key={proj[0].name} prop={proj[0]} />
            </div>
          );
        })}
      </Carousel>
    );
  }
};
