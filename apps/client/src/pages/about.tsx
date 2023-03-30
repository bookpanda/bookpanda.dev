import Layout from "$modules/Layout/Layout";
import { Typography } from "@mui/material";
import { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <Layout header={<p>About me</p>}>
      <div>
        <Typography variant="h3" fontWeight={600}>
          Who am I?
        </Typography>
        <Typography variant="h6" fontWeight={300}>
          I am Idhibhat Pankam, currently a freshmen at Computer Engineering,
          Chulalongkorn University.
        </Typography>
      </div>
    </Layout>
  );
};

export default AboutPage;
