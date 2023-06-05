import "$styles/global.scss";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { AppProps } from "next/app";
import Head from "next/head";
import { AppProvider } from "src/core/contexts/appProvider";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>bookpanda</title>
        <meta content="Idhibhat Pankam's personal website" name="description" />
      </Head>

      <ApolloProvider client={client}>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
