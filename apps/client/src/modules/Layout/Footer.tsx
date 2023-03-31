import { Container, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <div className="mt-20 h-[30vh] w-full bg-gray-800 p-8">
      <Container maxWidth="xl">
        <div className="w-full">
          <Typography variant="h6" color="white">
            Site Theme
          </Typography>
        </div>
      </Container>
    </div>
  );
}
