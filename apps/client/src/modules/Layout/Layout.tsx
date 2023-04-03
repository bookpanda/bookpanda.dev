import { Banner } from "$modules/Layout/Banner";
import { Container, Slide, Typography, useMediaQuery } from "@mui/material";
import clsx from "clsx";
import { FC, PropsWithChildren, ReactNode, useRef } from "react";
import { theme } from "src/theme";

import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import { bannerHide } from "./NavBar/bannerClass";

interface ILayout extends PropsWithChildren {
  header: ReactNode;
}

export const Layout: FC<ILayout> = ({ children, header }) => {
  const divRef = useRef(null);
  const breakMD = useMediaQuery(theme.breakpoints.up("md"));
  const breakLG = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <div className="w-max-screen relative overflow-x-clip">
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
                  {header}
                </Typography>
              ) : breakMD ? (
                <Typography variant="h3" fontWeight={700} color="white">
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
      <Footer />
    </div>
  );
};

export default Layout;
