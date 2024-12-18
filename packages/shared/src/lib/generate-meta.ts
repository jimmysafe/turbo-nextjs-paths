import type { Landing, Media } from "@repo/gql/generated/graphql";

import type { Metadata } from "next";
import { getServerSideURL } from "./get-url";
import { mergeOpenGraph } from "./merge-open-graph";

export function generateTitle({ doc }: { doc: Landing }) {
  return doc?.name ? `${doc.name} | YOURRETAIL` : "YOURRETAIL";
}

export function generateURL({ doc }: { doc: Landing }) {
  const url = getServerSideURL();

  return doc?.slug ? `${url}/${doc.slug}` : url;
}

function getImageURL(image?: Media | number | null) {
  const serverUrl = getServerSideURL();

  let url = `${serverUrl}/website-OG.webp`;

  if (image && typeof image === "object" && "url" in image) {
    const ogUrl = image.sizes?.og?.url;

    url = ogUrl ? serverUrl + ogUrl : serverUrl + image.url;
  }

  return url;
}

export async function generateMeta(args: {
  doc: Partial<Landing>;
}): Promise<Metadata> {
  const { doc } = args || {};

  const ogImage = getImageURL(doc?.meta?.image);

  const title = doc?.meta?.title
    ? `${doc?.meta?.title} | Sirio Next Gen`
    : "Sirio Next Gen";

  return {
    description: doc?.meta?.description,
    openGraph: mergeOpenGraph({
      description: doc?.meta?.description || "",
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      title,
      url: Array.isArray(doc?.slug) ? doc?.slug.join("/") : "/",
    }),
    title,
  };
}
