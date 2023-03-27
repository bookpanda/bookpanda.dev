import { Banner } from "$modules/Layout/Banner";
import { Container, Slide, Typography } from "@mui/material";
import { FC, PropsWithChildren, ReactNode, useRef } from "react";
import { theme } from "src/theme";

import { NavBar } from "./NavBar/NavBar";

interface ILayout extends PropsWithChildren {
  header: ReactNode;
}

const Layout: FC<ILayout> = ({ children, header }) => {
  const divRef = useRef(null);
  return (
    <div className="relative w-screen">
      <Banner />
      <div className="absolute -z-10 h-[42vh] w-[70vw] bg-gradient-to-r from-gray-800" />
      <div className="absolute -z-10 h-[10vh] w-[100vw] bg-gradient-to-b from-gray-800" />

      <Container maxWidth="xl">
        <div className="flex h-[42vh] flex-col">
          <NavBar />
          <div className="flex h-[35vh] items-center" ref={divRef}>
            <Slide
              direction="right"
              in={true}
              container={divRef.current}
              easing={{ enter: theme.transitions.easing.easeOut }}
              timeout={{ enter: theme.transitions.duration.complex }}
            >
              <Typography variant="h2" fontWeight={700} color="white">
                {header}
              </Typography>
            </Slide>
          </div>
        </div>
        {children}
      </Container>
    </div>
  );
};

export default Layout;
