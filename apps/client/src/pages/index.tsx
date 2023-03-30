import Layout from "$modules/Layout/Layout";
import { Feed } from "$modules/index";
import { Card, Collapse } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { intaniaCal } from "public/images";

const IndexPage: NextPage = () => {
  return (
    <Layout
      header={
        <>
          <p className="hidden lg:block">
            Hello there, <br />
            bookpanda here
          </p>
          <p className="lg:hidden">It&apos;s me, bookpanda</p>
        </>
      }
    >
      <Feed></Feed>
      <div className="mb-10 bg-blue-100">
        <Card sx={{ width: "30%" }}>
          <Link href={""} rel="noopener noreferrer" target="_blank">
            <div className="h-[55vh] w-full overflow-hidden bg-purple-100">
              {/* <Image
              src={image}
              // width={2000}
              // height={2000}
              // fill
              style={{ objectFit: "cover" }}
              alt="banner"
            /> */}
              <Image
                alt="kawi"
                src={intaniaCal}
                // width={500}
                // height={300}
                // style={{ objectFit: "contain" }}
                // fill
              />
            </div>
          </Link>
        </Card>
      </div>
      <Feed></Feed>
      <Feed></Feed>
    </Layout>
  );
};

export default IndexPage;
