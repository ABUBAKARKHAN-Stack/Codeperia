import { navLinks } from "@/constants/navigation.constants";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { LayoutGroup, motion } from "motion/react";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import ServicesDropdown from "./ServicesDropdown";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ContainerLayout from "../ContainerLayout";
import ContactDrawer from "@/components/shared/ContactDrawer";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";

type Props = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
};

const DesktopNav = ({ setOpen, open }: Props) => {
  const [showServices, setShowServices] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setShowServices(false);
  }, [pathname, setOpen]);

  return (
    <motion.header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
        scrolled
          ? "glass shadow-lg"
          : "border-transparent bg-transparent backdrop-blur-none",
      )}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <ContainerLayout className="flex h-20 items-center justify-between">
        <Logo className="h-9 sm:h-11" link />
        <nav
          className="hidden items-center gap-1 lg:flex"
          onMouseLeave={() => setHoveredPath(null)}
        >
          <LayoutGroup id="nav-pills">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.to ||
                (link.to !== "/" && pathname.startsWith(link.to));

              return (
                <div
                  key={link.to}
                  ref={link.hasDropdown ? servicesRef : null}
                  className="relative"
                  onMouseEnter={() => {
                    setHoveredPath(link.to);
                    link.hasDropdown && setShowServices(true);
                  }}
                  onMouseLeave={() =>
                    link.hasDropdown && setShowServices(false)
                  }
                >
                  <Link
                    href={link.to}
                    className={cn(
                      "relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {hoveredPath === link.to &&
                      (hoveredPath === "/" ||
                        !pathname.includes(hoveredPath)) && (
                        <motion.div
                          className="bg-accent/5 absolute -inset-x-1 -inset-y-0.5 scale-95 rounded-full"
                          layoutId="nav-hover-pill"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}

                    {isActive && (
                      <div className="bg-accent/10 absolute inset-0 rounded-full" />
                    )}
                    <span className="relative z-10">{link.label}</span>
                    {link.hasDropdown && (
                      <motion.span
                        className="relative z-10"
                        animate={{ rotate: showServices ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-3.5 w-3.5" />
                      </motion.span>
                    )}
                  </Link>

                  {/* Services Dropdown */}
                  <ServicesDropdown
                    hasDropdown={link.hasDropdown}
                    showServices={showServices}
                    anchorRef={servicesRef}
                  />
                </div>
              );
            })}
          </LayoutGroup>
          <div className="bg-border mx-2 h-6 w-px" />
          <ContactDrawer>
            <Button
              size="default"
              className="bg-foreground text-background hover:bg-foreground/90 ml-2 rounded-full px-6 font-medium"
            >
              Get in Touch
            </Button>
          </ContactDrawer>
        </nav>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button
            onClick={() => setOpen(true)}
            className="text-foreground hover:bg-accent/10 flex h-10 w-10 items-center justify-center rounded-full bg-transparent transition-colors"
          >
            {!open && <Menu className="size-5!" />}
          </Button>
        </div>
      </ContainerLayout>
    </motion.header>
  );
};

export default DesktopNav;
