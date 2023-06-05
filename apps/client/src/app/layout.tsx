"use client";

import { Layout } from "$modules/Layout";
import "$styles/global.scss";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
// import { Metadata } from "next";
import Head from "next/head";
import { AppProvider } from "src/core/contexts/appProvider";

// export const metadata: Metadata = {
//   title: "bookpanda",
//   description: "Idhibhat Pankam's personal website",
// };

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Head>
        <title>bookpanda</title>
        <meta content="Idhibhat Pankam's personal website" name="description" />
      </Head>
      <html lang="en">
        <body>
          <ApolloProvider client={client}>
            <AppProvider>
              <Layout>{children}</Layout>
            </AppProvider>
          </ApolloProvider>
        </body>
      </html>
    </>
  );
}
