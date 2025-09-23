"use client";
import { Logo } from "@/components/reusable";
import { Button } from "@/components/ui/button";
import { SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/data/navItems";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { TbMenu4 } from "react-icons/tb";

type Props = {
  pathname: string;
};

const DesktopNav: FC<Props> = ({ pathname }) => {
  const router = useRouter();
  const isContactActive = pathname === "/contact";

  const handleCTA = () => {
    router.push("/contact");
  };
  return (
    <div className="flex h-full items-center justify-between">
      {/* Logo Section */}
      <Logo className="h-10 w-auto" clickable />

      {/* Mobile Menu Toggle */}

      <SheetTrigger className='focus:outline-none" flex h-full cursor-pointer items-center justify-center text-white lg:hidden'>
        <TbMenu4 className="size-7 drop-shadow-[0px_0px_3px_black]" />
      </SheetTrigger>

      {/* Desktop Navigation */}
      <ul className="hidden h-full items-center space-x-6.5 font-normal text-neutral-50 lg:flex">
        {navLinks.map(({ href, icon, name }) => {
          const isActive = pathname === href || pathname.startsWith(href + "/");

          return (
            <li
              key={name}
              className="relative flex h-full items-center justify-center"
            >
              <Link
                href={href}
                className={cn(
                  "hover:text-primary text-neutral-50 transition text-shadow-2xs",
                )}
              >
                {name}
                {isActive && (
                  <span className="bg-primary absolute -bottom-0.75 left-1/2 block h-2 w-[125%] -translate-x-1/2 rounded-full" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
      <Button
        className={cn(
          "group hidden cursor-pointer text-sm shadow-[0px_0px_10px_rgba(0,0,0,0.2)] duration-300 hover:scale-110 lg:inline-flex",
          isContactActive && "scale-105 bg-purple-700/90",
        )}
        onClick={handleCTA}
      >
        Get in Touch
        <ChevronRight
          className={cn(
            "size-5 scale-90 stroke-[2.5px]",
            "transition-all duration-200 ease-in-out",
            "group-hover:scale-100 group-hover:rotate-180",
            isContactActive && "scale-100 rotate-180",
          )}
        />
      </Button>
    </div>
  );
};

export default DesktopNav;
