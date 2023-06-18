import { AboutMe, Links } from "$modules/About";
import { PageTitle } from "$modules/Layout/PageTitle";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <>
      <PageTitle>
        <p>About me</p>
      </PageTitle>
      <div className="">
        <AboutMe />
        <Links />
      </div>
    </>
  );
};

export default IndexPage;
