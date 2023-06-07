import { Layout } from "$modules/Layout";
import "$styles/global.scss";
import { Metadata } from "next";
import { ApolloWrapper } from "src/apollo/wrapper";
import { AppProvider } from "src/core/contexts/appProvider";

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
            <AppProvider>
              <Layout>{children}</Layout>
            </AppProvider>
          </ApolloWrapper>
        </body>
      </html>
    </>
  );
}
