import { APP_NAME, BRAND_DESCRIPTION } from "@/constants/app.constants";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: APP_NAME,
    short_name: APP_NAME,
    description: BRAND_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "hsl(150 20% 4%)",
    theme_color: "hsl(107 24% 71%)",
    icons: [
      { src: "/assets/brand/favicons/favicon.ico", type: "image/x-icon" },
      { src: "/assets/brand/favicons/favicon.svg", type: "image/svg+xml" },
      {
        src: "/assets/brand/favicons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/assets/brand/favicons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/assets/brand/favicons/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/assets/brand/favicons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/assets/brand/favicons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/assets/brand/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
