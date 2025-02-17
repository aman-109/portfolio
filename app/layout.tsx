import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../src/styles/css/variables.css'
import '../src/styles/css/global.css'
import "../src/styles/css/utils/anim.css";
import "../node_modules/the-new-css-reset/css/reset.css"

import { LazyMotion, domAnimation } from "framer-motion";
import Layout from "@/src/components/layout/layout";
import BackToTop from "@/src/components/utils/backtotop";
import Navbar from "@/src/components/layout/navbar";
import Footer from "@/src/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <LazyMotion features={domAnimation}> */}
      <body className={inter.className}>
        <Layout>
        <Navbar />

       <main>
        {children}
        </main> 
        <Footer />

        </Layout>
      </body>
      {/* <DevelopmentNotice />
                        <Chatbot />
                        <SpeedInsights/>
                        <Analytics />
                        <SetGridGap /> */}
      <BackToTop />
      {/* </LazyMotion> */}
    </html>
  );
}
