import { Footer, Navbar } from "@/components/layout";
import ScrollToTopBtn from "@/components/ui/scroll-to-top-btn";
import { baseUrl, brandName } from "@/constants/constants";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  robots: "index, follow",
  openGraph: {
    url: `${baseUrl}/`,
    siteName: brandName,
  },
  alternates: {
    canonical: `${baseUrl}/`,
  },
}

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ScrollToTopBtn />
    </>
  );
};

export default layout;
