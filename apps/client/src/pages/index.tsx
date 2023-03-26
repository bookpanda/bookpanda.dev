import { Banner } from "$modules/Banner/Banner";
import { Container } from "@mui/material";
import { NextPage } from "next";
import { Button } from "ui";

const IndexPage: NextPage = () => {
  return (
    <Container maxWidth={false}>
      <div className="bg-red-100">
        <Banner />
        <Button />
      </div>
    </Container>
  );
};

export default IndexPage;
