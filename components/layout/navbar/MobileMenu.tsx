import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants/navigation.constants";
import { useServices } from "@/context/ServiceContext";
import { getIconByName } from "@/lib/icon-mapper";
import { cn } from "@/lib/utils";
import { ChevronDown, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ContainerLayout from "../ContainerLayout";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
const MobileMenu = ({ open, setOpen }: Props) => {
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();
  const [mobileServices, setMobileServices] = useState(false);
  const { servicesOverview } = useServices();

  useEffect(() => setMounted(true), []);

  if (!mounted) return;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="bg-background/95 fixed inset-0 z-999 h-screen overflow-y-auto backdrop-blur-xl lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.4, delay: 0.15, ease: "easeInOut" },
          }}
        >
          {/* Mobile Menu Header  */}
          <motion.header
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.97,
              transition: { duration: 0.3, ease: "easeIn" },
            }}
            transition={{ delay: 0.2 }}
            className="glass fixed z-999 w-full"
          >
            <ContainerLayout className="flex w-full justify-between">
              <Logo className="h-10" link />

              <div className="flex items-center gap-2 lg:hidden">
                {/* <ThemeToggle /> */}
                <Button
                  onClick={() => setOpen(false)}
                  className="text-foreground hover:bg-accent/10 flex h-10 w-10 items-center justify-center rounded-full bg-transparent transition-colors"
                >
                  {open && <X className="size-5!" />}
                </Button>
              </div>
            </ContainerLayout>
          </motion.header>

          {/* Mobile Menu Navbar  */}
          <motion.nav
            className="relative z-10 flex flex-col items-center justify-start gap-8 pt-28 pb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.97,
              transition: { duration: 0.3, ease: "easeIn" },
            }}
            transition={{ delay: 0.1 }}
          >
            {navLinks.map((link, i) => {
              const isActive =
                pathname === link.to ||
                (link.to !== "/" && pathname.startsWith(link.to));
              return (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.05 }}
                  className="flex w-full max-w-96 flex-col items-center px-2 min-[400px]:px-0"
                >
                  {link.hasDropdown ? (
                    <>
                      <div className="flex h-full items-center gap-3">
                        <Link
                          href={link.to}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "font-playfair text-3xl font-semibold transition-colors",
                            isActive
                              ? "text-accent"
                              : "text-foreground/60 hover:text-foreground",
                          )}
                        >
                          {link.label}
                        </Link>
                        <Button
                          type="button"
                          onClick={() => setMobileServices(!mobileServices)}
                          className="bg-accent/10 hover:bg-accent/20 flex h-9 w-9 items-center justify-center rounded-full transition-transform active:scale-90"
                        >
                          <motion.div
                            animate={{ rotate: mobileServices ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <ChevronDown className="text-accent h-5 w-5" />
                          </motion.div>
                        </Button>
                      </div>
                      <AnimatePresence>
                        {mobileServices && (
                          <motion.div
                            className="bg-card/80 border-border/50 mt-4 grid w-full grid-cols-2 gap-2 overflow-hidden rounded-2xl border p-3 backdrop-blur-md"
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{
                              opacity: 1,
                              height: "auto",
                              marginTop: 16,
                            }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            {servicesOverview.map((item) => {
                              const Icon = getIconByName(item.icon);
                              return (
                                <Link
                                  key={item._id}
                                  href={`/services/${item.slug}`}
                                  onClick={() => {
                                    setOpen(false);
                                    setMobileServices(false);
                                  }}
                                  className="hover:bg-accent/10 active:bg-accent/15 flex items-center gap-2 rounded-xl p-2.5 transition-colors"
                                >
                                  <div className="bg-accent/10 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg">
                                    <Icon className="text-accent h-3.5 w-3.5" />
                                  </div>
                                  <div className="min-w-0">
                                    <p className="text-foreground text-xs leading-tight font-medium">
                                      {item.title}
                                    </p>
                                    <p className="text-muted-foreground/80 mt-0.5 text-[10px] leading-snug">
                                      {item.overviewLabel}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.to}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "font-playfair text-3xl font-semibold transition-colors",
                        isActive
                          ? "text-accent"
                          : "text-foreground/60 hover:text-foreground",
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link href={"/contact"}>
                <Button
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90 mt-4 rounded-full px-10"
                  onClick={() => setOpen(false)}
                >
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default MobileMenu;
