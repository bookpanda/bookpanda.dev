import { projects } from "$data/projects";
import { Box } from "@mui";
import clsx from "clsx";
import { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from "./Feed.module.scss";
import { FeedItem } from "./FeedItem";
import { groupData } from "./groupData";

export const FeedSlider: FC = () => {
  return (
    <>
      <Box sx={{ display: { xs: "none", lg: "block" } }}>
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
          {groupData(projects, 4).map((proj) => {
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
      </Box>
      <Box sx={{ display: { xs: "none", sm: "block", lg: "none" } }}>
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
          {groupData(projects, 2).map((proj) => {
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
      </Box>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
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
          {groupData(projects, 1).map((proj) => {
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
      </Box>
    </>
  );
};
