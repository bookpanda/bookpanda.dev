import { Layout } from "$modules/Layout";
import "$styles/global.scss";
import { Metadata } from "next";
import { ApolloWrapper } from "src/apollo/wrapper";
import { AppProvider } from "src/core/contexts/appProvider";
import { ReduxProvider } from "src/core/redux";

export const metadata: Metadata = {
  title: "bookpanda",
  description: "Idhibhat Pankam's personal website",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en">
        <body>
          <ApolloWrapper>
            <ReduxProvider>
              <AppProvider>
                <Layout>{children}</Layout>
              </AppProvider>
            </ReduxProvider>
          </ApolloWrapper>
        </body>
      </html>
    </>
  );
}
