import { Footer, Navbar } from "@/components/layout";
import ScrollToTopBtn from "@/components/ui/scroll-to-top-btn";
import React from "react";



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
