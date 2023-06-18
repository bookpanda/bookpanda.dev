"use client";

import { Slide, Typography } from "@mui";
import { FC, PropsWithChildren, useRef } from "react";
import { theme } from "src/theme";

import { NavBar } from "./NavBar";

export const PageTitle: FC<PropsWithChildren> = ({ children }) => {
  const divRef = useRef(null);
  return (
    <div className="mb-10 flex h-[42vh] flex-col">
      <NavBar />
      <div className="ml-8 flex h-[35vh] items-center" ref={divRef}>
        <Slide
          direction="right"
          in={true}
          container={divRef.current}
          easing={{ enter: theme.transitions.easing.easeOut }}
          timeout={{ enter: theme.transitions.duration.complex }}
        >
          <Typography
            variant="h2"
            fontWeight={700}
            color="white"
            sx={{ display: { xs: "none", lg: "block" } }}
          >
            {children}
          </Typography>
        </Slide>

        <Slide
          direction="right"
          in={true}
          container={divRef.current}
          easing={{ enter: theme.transitions.easing.easeOut }}
          timeout={{ enter: theme.transitions.duration.complex }}
        >
          <Typography
            variant="h3"
            fontWeight={700}
            color="white"
            sx={{ display: { xs: "none", md: "block", lg: "none" } }}
          >
            {children}
          </Typography>
        </Slide>

        <Slide
          direction="right"
          in={true}
          container={divRef.current}
          easing={{ enter: theme.transitions.easing.easeOut }}
          timeout={{ enter: theme.transitions.duration.complex }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            color="white"
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {children}
          </Typography>
        </Slide>
      </div>
    </div>
  );
};
