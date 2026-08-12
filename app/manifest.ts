import { APP_NAME, APP_SHORT_NAME, BRAND_DESCRIPTION } from "@/constants/app.constants";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: APP_NAME,
    short_name: APP_SHORT_NAME,
    description: BRAND_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    theme_color: "#c6f2c7",
    background_color: "#c6f2c7",
    icons: [
      {
        src: "/assets/brand/favicons/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/assets/brand/favicons/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}