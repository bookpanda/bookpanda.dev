import { Banner } from "$modules/Banner/Banner";
import { Container, Typography } from "@mui/material";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <div className="relative w-screen">
      <Banner />
      <div className="absolute -z-10 h-[42vh] w-[70vw] bg-gradient-to-r from-gray-800" />

      <Container maxWidth="xl">
        <div className="flex h-[42vh] items-center ">
          <Typography variant="h2" fontWeight={700} color="white">
            Hello there,
            <br />
            bookpanda here
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default IndexPage;
