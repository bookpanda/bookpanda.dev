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
              <FeedItem
                key={proj[0].name}
                name={proj[0].name}
                desc={proj[0].details}
                url={proj[0].url}
                image={proj[0].image}
              />
              {proj.length > 1 && (
                <FeedItem
                  key={proj[1].name}
                  name={proj[1].name}
                  desc={proj[1].details}
                  url={proj[1].url}
                  image={proj[1].image}
                />
              )}
              {proj.length > 2 && (
                <FeedItem
                  key={proj[2].name}
                  name={proj[2].name}
                  desc={proj[2].details}
                  url={proj[2].url}
                  image={proj[2].image}
                />
              )}
              {proj.length > 3 && (
                <FeedItem
                  key={proj[3].name}
                  name={proj[3].name}
                  desc={proj[3].details}
                  url={proj[3].url}
                  image={proj[3].image}
                />
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
              <FeedItem
                key={proj[0].name}
                name={proj[0].name}
                desc={proj[0].details}
                url={proj[0].url}
                image={proj[0].image}
              />
              {proj.length > 1 && (
                <FeedItem
                  key={proj[1].name}
                  name={proj[1].name}
                  desc={proj[1].details}
                  url={proj[1].url}
                  image={proj[1].image}
                />
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
              <FeedItem
                key={proj[0].name}
                name={proj[0].name}
                desc={proj[0].details}
                url={proj[0].url}
                image={proj[0].image}
              />
            </div>
          );
        })}
      </Carousel>
    );
  }
};
