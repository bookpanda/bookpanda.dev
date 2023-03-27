import "$styles/global.scss";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import { AppProvider } from "src/core/contexts/appProvider";
import { theme } from "src/theme";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>bookpanda</title>
        <meta content="App description" name="description" />
      </Head>

      <ApolloProvider client={client}>
        <AppProvider>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </AppProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
