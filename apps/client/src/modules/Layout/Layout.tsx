import { Banner } from "$modules/Layout/Banner";
import { Container, Slide, Typography, useMediaQuery } from "@mui/material";
import clsx from "clsx";
import { FC, PropsWithChildren, ReactNode, useRef } from "react";
import { theme } from "src/theme";

import { NavBar } from "./NavBar/NavBar";
import { bannerHide } from "./NavBar/bannerClass";

interface ILayout extends PropsWithChildren {
  header: ReactNode;
}

const Layout: FC<ILayout> = ({ children, header }) => {
  const divRef = useRef(null);
  const breakSM = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className="relative w-screen">
      <Banner />
      <div
        className={clsx(
          bannerHide,
          "h-[42vh] w-[100vw] bg-gradient-to-r from-gray-800 sm:w-[70vw]"
        )}
      />
      <div
        className={clsx(
          bannerHide,
          "h-[10vh] w-[100vw] bg-gradient-to-b from-gray-800"
        )}
      />

      <Container maxWidth="xl">
        <div className="mb-20 flex h-[42vh] flex-col">
          <NavBar />
          <div className="ml-8 flex h-[35vh] items-center" ref={divRef}>
            <Slide
              direction="right"
              in={true}
              container={divRef.current}
              easing={{ enter: theme.transitions.easing.easeOut }}
              timeout={{ enter: theme.transitions.duration.complex }}
            >
              {breakSM ? (
                <Typography variant="h2" fontWeight={700} color="white">
                  {header}
                </Typography>
              ) : (
                <Typography variant="h4" fontWeight={700} color="white">
                  {header}
                </Typography>
              )}
            </Slide>
          </div>
        </div>
        {children}
      </Container>
    </div>
  );
};

export default Layout;
