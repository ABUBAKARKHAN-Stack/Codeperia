"use client";

import {
  AlertTriangleIcon,
  RefreshCwIcon,
  WifiOffIcon,
  LoaderIcon,
  HomeIcon,
  FolderIcon,
  UserIcon,
  ServerIcon,
  ClockIcon,
  DatabaseIcon,
  FileTextIcon,
  BookOpenIcon,
  BriefcaseIcon,
  WrenchIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { ContainerLayout } from "../layout";

interface ErrorBoundaryProps {
  error: Error & { digest?: string };
  reset: () => void;
  title?: string;
  description?: string;
  homeUrl?: string;
  showHomeButton?: boolean;
  showRetryButton?: boolean;
  context?: "blogs" | "blog" | "services" | "service" | "general";
  className?: string;
}

export default function ErrorBoundary({
  error,
  reset,
  title,
  description,
  homeUrl = "/",
  showHomeButton = true,
  showRetryButton = true,
  context = "general",
  className,
}: ErrorBoundaryProps) {
  const router = useRouter();
  const [isRetrying, setIsRetrying] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    console.error(`${context} error:`, error);
  }, [error, context]);

  //* Smart icon selection based on error type and context
  const getErrorIcon = (error: Error) => {
    const errorMessage = error.message.toLowerCase();

    //! Sanity CMS specific errors
    if (
      errorMessage.includes("sanity") ||
      errorMessage.includes("groq") ||
      errorMessage.includes("dataset") ||
      errorMessage.includes("projectid")
    ) {
      return <DatabaseIcon className="size-10 text-red-400" />;
    }

    // Context-specific icons for not found errors
    if (
      errorMessage.includes("404") ||
      errorMessage.includes("not found") ||
      errorMessage.includes("notfound")
    ) {
      if (context === "blog") {
        return <FileTextIcon className="size-10 text-red-400" />;
      } else if (context === "blogs") {
        return <BookOpenIcon className="size-10 text-red-400" />;
      } else if (context === "service") {
        return <WrenchIcon className="size-10 text-red-400" />;
      } else if (context === "services") {
        return <BriefcaseIcon className="size-10 text-red-400" />;
      }
    }

    //! Network/Connection errors (common with Sanity CDN)
    if (
      errorMessage.includes("fetch") ||
      errorMessage.includes("network") ||
      errorMessage.includes("econnrefused") ||
      errorMessage.includes("connection") ||
      errorMessage.includes("cdn") ||
      errorMessage.includes("timeout")
    ) {
      return <WifiOffIcon className="size-10 text-red-400" />;
    }

    //! Not found errors
    if (
      errorMessage.includes("404") ||
      errorMessage.includes("not found") ||
      errorMessage.includes("notfound")
    ) {
      return <FolderIcon className="size-10 text-red-400" />;
    }

    //! Timeout errors (Sanity API timeouts)
    if (
      errorMessage.includes("timeout") ||
      errorMessage.includes("time out") ||
      errorMessage.includes("aborted")
    ) {
      return <ClockIcon className="size-10 text-red-400" />;
    }

    //! Server errors (Sanity API or your server)
    if (
      errorMessage.includes("500") ||
      errorMessage.includes("502") ||
      errorMessage.includes("503") ||
      errorMessage.includes("server") ||
      errorMessage.includes("internal") ||
      errorMessage.includes("api")
    ) {
      return <ServerIcon className="size-10 text-red-400" />;
    }

    //! Database/Parse/GROQ errors (Sanity specific)
    if (
      errorMessage.includes("parse") ||
      errorMessage.includes("json") ||
      errorMessage.includes("syntax") ||
      errorMessage.includes("groq") ||
      errorMessage.includes("query") ||
      errorMessage.includes("schema") ||
      errorMessage.includes("document")
    ) {
      return <DatabaseIcon className="size-10 text-red-400" />;
    }

    //! Authentication/Authorization errors (Sanity permissions)
    if (
      errorMessage.includes("auth") ||
      errorMessage.includes("unauthorized") ||
      errorMessage.includes("forbidden") ||
      errorMessage.includes("401") ||
      errorMessage.includes("403") ||
      errorMessage.includes("token") ||
      errorMessage.includes("permission")
    ) {
      return <UserIcon className="size-10 text-red-400" />;
    }

    //! Default fallback icon
    return <AlertTriangleIcon className="size-10 text-red-400" />;
  };

  //* Dynamic error messages based on context (singular vs plural)
  const getContextualErrorMessage = (error: Error, context: string) => {
    const contextMessages: Record<string, Record<string, string>> = {
      blogs: {
        fetch:
          "Unable to connect to our content management system. Please check your internet connection.",
        404: "No blog posts found in our database. Our content might be temporarily unavailable.",
        timeout:
          "Our Sanity CMS is taking longer than usual to load blog posts. Please wait a moment.",
        network: "Network connection to our content delivery system failed.",
        parse:
          "There's an issue with the blog data format from Sanity CMS. Our team has been notified.",
        server:
          "Our Sanity backend is experiencing difficulties. Please try again later.",
        auth: "Authentication failed while accessing blog content from Sanity.",
        groq: "There's an issue with our content query. Our development team is investigating.",
        default:
          "Something unexpected happened while fetching blog posts from our CMS.",
      },
      blog: {
        fetch:
          "Unable to load this blog post from our content system. Please check your connection.",
        404: "This blog post doesn't exist in our database or may have been unpublished.",
        timeout:
          "This blog post is taking longer than usual to load from Sanity CMS.",
        network: "Network connection failed while fetching this blog post.",
        parse:
          "There's an issue with this blog post's data structure from Sanity CMS.",
        server:
          "Our content backend is having trouble retrieving this blog post.",
        auth: "Authentication failed while accessing this blog post.",
        groq: "There's an issue with the content query for this blog post.",
        default:
          "Something unexpected happened while loading this blog post from our CMS.",
      },
      services: {
        fetch:
          "Unable to load our service offerings from the content system. Please check your connection.",
        404: "Our services catalog is not available in the database right now.",
        timeout:
          "Our service information is taking longer than usual to load from Sanity CMS.",
        network:
          "Network connection failed while fetching our service offerings.",
        parse: "There's an issue with the services data format from our CMS.",
        server:
          "Our content backend is experiencing difficulties loading services.",
        auth: "Authentication failed while accessing service information.",
        groq: "There's an issue with our services content query.",
        default:
          "Something unexpected happened while loading our services from the CMS.",
      },
      service: {
        fetch: "Unable to load this service details from our content system.",
        404: "This service offering doesn't exist in our database or may have been removed.",
        timeout:
          "This service information is taking longer than usual to load from Sanity.",
        network:
          "Network connection failed while fetching this service details.",
        parse:
          "There's an issue with this service's data structure from Sanity CMS.",
        server:
          "Our backend is having trouble retrieving this service information.",
        auth: "Authentication failed while accessing this service details.",
        groq: "There's an issue with the content query for this service.",
        default:
          "Something unexpected happened while loading this service from our CMS.",
      },
      general: {
        fetch:
          "Unable to load content from our CMS. Please check your connection.",
        404: "The requested content was not found in our database.",
        timeout:
          "Content is taking longer than expected to load from Sanity CMS.",
        network: "Network connection to our content system failed.",
        parse: "Content data appears to be corrupted or malformed in our CMS.",
        server: "Our content management system is experiencing difficulties.",
        auth: "Authentication failed while accessing content.",
        groq: "There's an issue with our content query system.",
        default:
          "An unexpected error occurred while fetching content from our CMS.",
      },
    };

    const messages = contextMessages[context] || contextMessages.general;
    const errorMsg = (error?.message || "Unknown error").toLowerCase();

    if (
      errorMsg.includes("fetch") ||
      errorMsg.includes("network") ||
      errorMsg.includes("cdn")
    )
      return messages.fetch;
    if (
      errorMsg.includes("404") ||
      errorMsg.includes("not found") ||
      errorMsg.includes("notfound")
    )
      return messages["404"];
    if (errorMsg.includes("timeout") || errorMsg.includes("aborted"))
      return messages.timeout;
    if (
      errorMsg.includes("network") ||
      errorMsg.includes("econnrefused") ||
      errorMsg.includes("connection")
    )
      return messages.network;
    if (
      errorMsg.includes("parse") ||
      errorMsg.includes("json") ||
      errorMsg.includes("syntax")
    )
      return messages.parse;
    if (
      errorMsg.includes("groq") ||
      errorMsg.includes("query") ||
      errorMsg.includes("sanity")
    )
      return messages.groq || messages.parse;
    if (
      errorMsg.includes("500") ||
      errorMsg.includes("502") ||
      errorMsg.includes("503") ||
      errorMsg.includes("server") ||
      errorMsg.includes("internal") ||
      errorMsg.includes("api")
    )
      return messages.server;
    if (
      errorMsg.includes("auth") ||
      errorMsg.includes("unauthorized") ||
      errorMsg.includes("403") ||
      errorMsg.includes("token") ||
      errorMsg.includes("permission")
    )
      return messages.auth;

    return description || messages.default;
  };

  const getContextualSuggestions = (error: Error, context: string) => {
    const baseSuggestions = [
      "Check your internet connection",
      "Wait a moment and try refreshing",
      "Clear your browser cache and cookies",
    ];

    const contextSuggestions: Record<string, string[]> = {
      blogs: [
        ...baseSuggestions,
        "Check if Sanity CMS is accessible",
        "Browse our portfolio and case studies instead",
        "Contact us if the issue persists",
      ],
      blog: [
        ...baseSuggestions,
        "Return to all blog posts",
        "Try searching for similar content",
        "Contact us if this post should exist",
      ],
      services: [
        ...baseSuggestions,
        "Browse our portfolio and case studies",
        "Contact us directly to discuss your project",
        "Check our social media for service updates",
      ],
      service: [
        ...baseSuggestions,
        "Return to all our services",
        "Contact us to discuss this specific service",
        "Browse our related service offerings",
      ],
      general: [
        ...baseSuggestions,
        "Check our status page for known issues",
        "Contact our support team",
        "Try accessing a different page",
      ],
    };

    return contextSuggestions[context] || contextSuggestions.general;
  };

  const getIcon = () => {
    return getErrorIcon(error);
  };

  const getContextualTitle = () => {
    if (title) return title;

    const contextTitles: Record<string, string> = {
      blogs: "No Blog Posts Available",
      blog: "Blog Post Not Found",
      services: "Service Offerings Unavailable",
      service: "Service Details Not Found",
      general: "Content Unavailable",
    };

    return contextTitles[context] || "Something Went Wrong";
  };

  const getStatusMessage = () => {
    const statusMessages: Record<string, string> = {
      blogs: "Blog Service Interrupted",
      blog: "Post Unavailable",
      services: "Service Catalog Interrupted",
      service: "Service Details Unavailable",
      general: "Service Interrupted",
    };

    return statusMessages[context] || "Service Interrupted";
  };

  const getHomeButtonText = () => {
    const buttonTexts: Record<string, { desktop: string; mobile: string }> = {
      blogs: { desktop: "Go Home", mobile: "Back to Home" },
      blog: { desktop: "View All Blogs", mobile: "All Blog Posts" },
      services: { desktop: "Go Home", mobile: "Back to Home" },
      service: { desktop: "View All Services", mobile: "All Services" },
      general: { desktop: "Go Home", mobile: "Back to Home" },
    };

    return buttonTexts[context] || buttonTexts.general;
  };

  const getHomeUrl = () => {
    if (homeUrl !== "/") return homeUrl;

    const urls: Record<string, string> = {
      blogs: "/",
      blog: "/blog",
      services: "/",
      service: "/services",
      general: "/",
    };

    return urls[context] || "/";
  };

  const handleRetry = async () => {
    setIsRetrying(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      window.location.reload();
    } catch (err) {
    } finally {
      setIsRetrying(false);
    }
  };

  const handleGoHome = async () => {
    setIsNavigating(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const targetUrl = getHomeUrl();
      if (window.location.pathname === targetUrl) {
        window.location.reload();
        return;
      }

      router.push(targetUrl);
    } catch (err) {
      console.error("Navigation failed:", err);
      window.location.href = getHomeUrl();
    } finally {
      setIsNavigating(false);
    }
  };

  const homeButtonText = getHomeButtonText();

  return (
    <main
      className={cn(
        "relative flex h-full min-h-screen w-full items-center justify-center",
        className,
      )}
    >
      <ContainerLayout>
        <div className="mx-auto w-full max-w-4xl">
          {/* Desktop Landscape Layout */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 items-center gap-8">
              {/* Left Side - Icon and Title */}
              <div className="text-center">
                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full border border-red-400/20 bg-red-400/10">
                  {getIcon()}
                </div>
                <h2 className="mb-4 text-3xl font-bold text-white">
                  {getContextualTitle()}
                </h2>
                <p className="text-lg text-white/70">
                  {getContextualErrorMessage(error, context)}
                </p>
              </div>

              {/* Right Side - Solutions and Actions */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="mb-4 flex items-center font-semibold text-white">
                  <AlertTriangleIcon className="mr-2 size-5 text-amber-400" />
                  Quick Solutions
                </h3>

                <ul className="mb-6 space-y-3">
                  {getContextualSuggestions(error, context).map(
                    (suggestion, index) => (
                      <li
                        key={index}
                        className="flex items-center text-white/80"
                      >
                        <div className="bg-primary mr-3 h-1.5 w-1.5 rounded-full"></div>
                        {suggestion}
                      </li>
                    ),
                  )}
                </ul>

                <div className="flex gap-3">
                  {showRetryButton && (
                    <button
                      onClick={handleRetry}
                      disabled={isRetrying || isNavigating}
                      className="inline-flex flex-1 cursor-pointer items-center justify-center rounded-lg border border-white/20 bg-white/10 px-4 py-3 font-medium text-white transition-all hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white/5"
                    >
                      {isRetrying ? (
                        <LoaderIcon className="mr-2 size-4 animate-spin" />
                      ) : (
                        <RefreshCwIcon className="mr-2 size-4" />
                      )}
                      {isRetrying ? "Retrying..." : "Try Again"}
                    </button>
                  )}
                  {showHomeButton && (
                    <button
                      onClick={handleGoHome}
                      disabled={isRetrying || isNavigating}
                      className="bg-primary inline-flex flex-1 cursor-pointer items-center justify-center rounded-lg px-4 py-3 font-medium text-nowrap text-white transition-all hover:bg-purple-700/90 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-purple-700/90"
                    >
                      {isNavigating ? (
                        <LoaderIcon className="mr-2 size-4 animate-spin" />
                      ) : context === "blog" ? (
                        <BookOpenIcon className="mr-2 size-4" />
                      ) : context === "service" ? (
                        <BriefcaseIcon className="mr-2 size-4" />
                      ) : (
                        <HomeIcon className="mr-2 size-4" />
                      )}
                      {isNavigating ? "Navigating..." : homeButtonText.desktop}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Portrait Layout */}
          <div className="block text-center md:hidden">
            <div className="mx-auto max-w-md rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border border-red-400/20 bg-red-400/10">
                {getIcon()}
              </div>

              <h2 className="mb-4 text-2xl font-bold text-white">
                {getContextualTitle()}
              </h2>

              <p className="mb-6 text-white/70">
                {getContextualErrorMessage(error, context)}
              </p>

              <div className="mb-6 rounded-lg bg-white/5 p-4 text-left">
                <h3 className="mb-3 flex items-center font-medium text-white">
                  <AlertTriangleIcon className="mr-2 size-4 text-amber-400" />
                  Quick Solutions
                </h3>
                <ul className="space-y-2">
                  {getContextualSuggestions(error, context).map(
                    (suggestion, index) => (
                      <li
                        key={index}
                        className="flex items-center text-sm text-white/80"
                      >
                        <div className="mr-3 h-1 w-1 rounded-full bg-purple-400"></div>
                        {suggestion}
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                {showRetryButton && (
                  <button
                    onClick={handleRetry}
                    disabled={isRetrying || isNavigating}
                    className="inline-flex flex-1 cursor-pointer items-center justify-center rounded-lg border border-white/20 bg-white/10 px-4 py-3 font-medium text-white transition-all hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white/5"
                  >
                    {isRetrying ? (
                      <LoaderIcon className="mr-2 size-4 animate-spin" />
                    ) : (
                      <RefreshCwIcon className="mr-2 size-4" />
                    )}
                    {isRetrying ? "Retrying..." : "Try Again"}
                  </button>
                )}
                {showHomeButton && (
                  <button
                    onClick={handleGoHome}
                    disabled={isRetrying || isNavigating}
                    className="bg-primary inline-flex cursor-pointer items-center justify-center rounded-lg px-4 py-3 font-medium text-white transition-all hover:bg-purple-700/90 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-purple-700/90"
                  >
                    {isNavigating ? (
                      <LoaderIcon className="mr-2 size-4 animate-spin" />
                    ) : context === "blog" ? (
                      <BookOpenIcon className="mr-2 size-4" />
                    ) : context === "service" ? (
                      <BriefcaseIcon className="mr-2 size-4" />
                    ) : (
                      <HomeIcon className="mr-2 size-4" />
                    )}
                    {isNavigating ? "Navigating..." : homeButtonText.mobile}
                  </button>
                )}
              </div>

              <div className="mt-4 inline-flex items-center rounded-full border border-red-400/20 bg-red-400/5 px-4 py-2 text-xs text-red-300">
                <div className="mr-2 h-1.5 w-1.5 animate-pulse rounded-full bg-red-400"></div>
                {getStatusMessage()}
              </div>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </main>
  );
}
