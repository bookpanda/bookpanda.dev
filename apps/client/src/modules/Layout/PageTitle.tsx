import { Slide, Typography, useMediaQuery } from "@mui/material";
import { FC, PropsWithChildren, useRef } from "react";
import { theme } from "src/theme";

import { NavBar } from "./NavBar";

export const PageTitle: FC<PropsWithChildren> = ({ children }) => {
  const divRef = useRef(null);
  const breakMD = useMediaQuery(theme.breakpoints.up("md"));
  const breakLG = useMediaQuery(theme.breakpoints.up("lg"));
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
          {breakLG ? (
            <Typography variant="h2" fontWeight={700} color="white">
              {children}
            </Typography>
          ) : breakMD ? (
            <Typography variant="h3" fontWeight={700} color="white">
              {children}
            </Typography>
          ) : (
            <Typography variant="h4" fontWeight={700} color="white">
              {children}
            </Typography>
          )}
        </Slide>
      </div>
    </div>
  );
};
