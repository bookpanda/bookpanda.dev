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
      <Feed></Feed>
      <Feed></Feed>
    </Layout>
  );
};

export default IndexPage;
