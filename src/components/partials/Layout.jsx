import React from "react";
import Header from "@/components/partials/Header";
import Footer from "@/components/partials/Footer";
import PageHead from "@/components/partials/PageHead";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function Layout({ children }) {
  return (
    <>
      <PageHead />
      <Header />
      <main className={`${inter.className}`}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
