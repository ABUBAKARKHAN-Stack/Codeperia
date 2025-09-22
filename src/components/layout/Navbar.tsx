"use client";
import React, { useState } from "react";
import { Sheet } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import ContainerLayout from "../layout/ContainerLayout";
import { DesktopNav, MobileMenu } from "@/components/section/navbar";

function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 h-16 w-full overflow-hidden border-b border-white/10 bg-gradient-to-r from-white/5 via-white/10 to-white/5 shadow-[0px_0px_12px_rgba(0,0,0,0.1)] backdrop-blur-2xl">
      <ContainerLayout className="py-0">
        <Sheet open={open} onOpenChange={setOpen}>
          {/* ================ Desktop Nav ===================== */}
          <DesktopNav pathname={pathname} />

          {/* ===================== Mobile Menu ===================== */}
          <MobileMenu setOpen={setOpen} pathname={pathname} />
        </Sheet>
      </ContainerLayout>
    </nav>
  );
}

export default Navbar;
