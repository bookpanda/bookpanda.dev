import { Container, Typography } from "@mui/material";
import React, { FC } from "react";

import { Themes } from "./Themes";

export const Footer: FC = () => {
  return (
    <div className="mt-20 h-[30vh] w-full bg-gray-800 p-8">
      <Container maxWidth="xl">
        <div className="w-full">
          <Typography variant="h6" color="white">
            Site Theme
          </Typography>
          <Themes />
        </div>
      </Container>
    </div>
  );
};
