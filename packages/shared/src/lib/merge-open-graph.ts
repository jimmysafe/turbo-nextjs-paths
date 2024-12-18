import type { Metadata } from "next";
import { getServerSideURL } from "./get-url";

const defaultOpenGraph: Metadata["openGraph"] = {
  type: "website",
  description: "An open-source website built with Payload and Next.js.",
  images: [
    {
      url: `${getServerSideURL()}/website-template-OG.webp`,
    },
  ],
  siteName: "Payload Website Template",
  title: "Payload Website Template",
};

export function mergeOpenGraph(og?: Metadata["openGraph"]): Metadata["openGraph"] {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph?.images,
  };
}
