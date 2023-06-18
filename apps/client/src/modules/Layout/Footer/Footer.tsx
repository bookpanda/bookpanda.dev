import { Container, Typography } from "@mui";
import React, { FC } from "react";

import { Themes } from "./Themes";

export const Footer: FC = () => {
  return (
    <div className="mt-20 h-[30vh] w-full bg-secondary.main p-8">
      <Container maxWidth="xl">
        <div className="w-full">
          <Typography variant="h6" sx={{ color: "primary.light" }}>
            Site Theme
          </Typography>
          <Themes />
        </div>
      </Container>
    </div>
  );
};
