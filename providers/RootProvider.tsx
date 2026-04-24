import { Toaster } from "@/components/ui/sonner";
import { ReactNode } from "react";
import { Footer, Navbar } from "@/components/layout/index";

export const RootProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Toaster />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default RootProvider;
