import type { MetadataRoute } from "next";
import { CIVANT_SHORT_DEFINITION } from "../lib/company";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Civant",
    short_name: "Civant",
    description: CIVANT_SHORT_DEFINITION,
    start_url: "/",
    display: "standalone",
    background_color: "#050f24",
    theme_color: "#00d2dc",
    icons: [
      {
        src: "/favicon-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
