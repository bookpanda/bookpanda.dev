"use client";

import { Banner } from "$modules/Layout/Banner";
import { Container, ThemeProvider } from "@mui";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { getTheme } from "src/core/redux/slices/themeSlice/selectors";
import { allThemes } from "src/theme";

import { Footer } from "./Footer";
import { bannerHide } from "./NavBar/bannerClass";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const currentTheme = useSelector(getTheme);
  const theme = allThemes[currentTheme as keyof typeof allThemes];

  return (
    <ThemeProvider theme={theme}>
      <div
        className={clsx(
          "w-max-screen relative z-10 overflow-x-clip bg-primary.main transition-all",
          `theme-${currentTheme}`
        )}
      >
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

        <Container maxWidth="xl">{children}</Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
