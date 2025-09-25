"use client";
import { Highlighter } from "@/components/magicui/highlighter";
import React, { FC, Fragment, ReactNode } from "react";
import { ContainerLayout } from "../layout";
import { cn } from "@/lib/utils";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { Home, SlashIcon } from "lucide-react";



type Props = {
  pageHeading: string;
  subText?: string;
  children?: ReactNode;
  className?: string;
};

const PageHeader: FC<Props> = ({
  pageHeading,
  subText,
  children,
  className,
}) => {

  const pathname = usePathname();
  const pathSegments = pathname.split("/").map((path) => path === "" ? "/" : path);

  const formatPathname = (path: string) => {
    if (path === "/") return <span className="inline-flex gap-x-1.5 items-center"><Home className="size-4.25" /> Home</span>
    return path.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
  }

  const breadcrumbUrlBuilder = (index: number) => {
    if (pathSegments[index] === '/') return '/';
    return "/" + pathSegments.slice(1, index + 1).join('/')
  }


  return (
    <header
      className={cn(
        "z-10 bg-gradient-to-b min-h-screen flex flex-col justify-center items-center from-[#2a0347] via-[#450e6e] to-[#2a0347]",
        "pt-16",
        "relative w-full",
        className,
      )}
    >
      <div
        className="absolute inset-0 -z-20 opacity-25"
        style={{ backgroundImage: "url('/assets/bg-pattern.svg')" }}
      />

      <ContainerLayout className="h-full">
        <section className="flex size-full flex-col items-center justify-center gap-y-8">
          <Highlighter
            action="underline"
            animationDuration={500}
            once
            justHighlighter
            color="white"
            className="font-audiowide w-fit text-center text-4xl text-wrap md:text-5xl lg:text-6xl"
          >
            <h1 className="w-fit">{pageHeading}</h1>
          </Highlighter>
          {subText && (
            <Highlighter
              action="highlight"
              delay={0.75}
              animationDuration={500}
              once
              justHighlighter
              color="rgba(255,255,255,0.05)"
              className="font-audiowide w-fit max-w-[500px] p-2 text-center text-base font-light tracking-wider text-wrap text-white/85"
            >
              <span className="w-fit">{subText}</span>
            </Highlighter>
          )}
          <div className="space-y-2">
            <h5 className="text-base font-semibold text-center">Navigation:</h5>
            <Breadcrumb>
              <BreadcrumbList
                className="text-base text-white font-light"
              >
                {
                  pathSegments.map((p, i) => (
                    <Fragment key={i}>
                      <BreadcrumbItem
                      >
                        <BreadcrumbLink
                          href={breadcrumbUrlBuilder(i)}
                          className={cn(
                            "text-[15px] text-white hover:text-purple-300 font-normal",
                            pathname === breadcrumbUrlBuilder(i) ? "text-purple-300" : "text-white"
                          )}
                        >
                          {formatPathname(p)}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      {
                        i < pathSegments.length - 1 && <BreadcrumbSeparator>
                          <SlashIcon className="-rotate-35 stroke-3 size-3.5" />
                        </BreadcrumbSeparator>
                      }
                    </Fragment>
                  )
                  )
                }
              </BreadcrumbList>
            </Breadcrumb>

          </div>
          {children && children}

        </section>
      </ContainerLayout>
    </header>
  );
};

export default PageHeader;
