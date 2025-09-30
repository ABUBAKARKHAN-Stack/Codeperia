"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useRouter } from "next/navigation";
import { ArrowLeftCircle, Home } from "lucide-react";
import { AnimatedHoverBtn } from "./animated-hover-btn";

const NotFound = () => {
  const router = useRouter();

  return (
    <main className="relative flex h-full min-h-screen w-full items-center justify-center overflow-hidden">
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center gap-12 p-6 pt-20 lg:flex-row">
        <DotLottieReact
          src="/assets/animations/not-found.json"
          loop
          autoplay
          style={{ height: 375, width: 375 }}
        />
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-white md:text-6xl">Oops!</h1>
            <p className="text-xl font-medium text-neutral-200 md:text-2xl">
              Could not find requested resource
            </p>
            <p className="mx-auto max-w-md text-lg text-neutral-300 lg:mx-0">
              The page you're looking for seems to have vanished into the
              digital void.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <AnimatedHoverBtn
              onClick={() => router.push("/")}
              variant="default"
              icon={Home}
            >
              Return Home
            </AnimatedHoverBtn>
            <AnimatedHoverBtn
              onClick={() => router.back()}
              variant="outline"
              icon={ArrowLeftCircle}
            >
              Go Back
            </AnimatedHoverBtn>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
