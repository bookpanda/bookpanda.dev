import { Feed } from "$modules/Feed";
import { PageTitle } from "$modules/Layout/PageTitle";
import { Typography } from "@mui";
import { NextPage } from "next";
import Image from "next/image";
import { adultFun } from "public/images";

const IndexPage: NextPage = () => {
  return (
    <>
      <PageTitle>
        <>
          <p className="hidden lg:block">
            Hello there, <br />
            bookpanda here
          </p>
          <p className="lg:hidden">It&apos;s me, bookpanda</p>
        </>
      </PageTitle>
      <Feed></Feed>
      <Typography variant="h4" fontWeight={600} color="secondary.dark">
        Yep, so true 😭😭😭
      </Typography>
      <div className="mt-6 flex flex-col items-center justify-center rounded-lg bg-primary.light">
        <Image alt="how-to-have-fun-as-adult" src={adultFun} />
      </div>
    </>
  );
};

export default IndexPage;
