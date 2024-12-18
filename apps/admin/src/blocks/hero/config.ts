import type { Block } from "payload";

export const LandingHero: Block = {
  slug: "hero-landing",
  interfaceName: "HeroLandingBlock",
  fields: [
    {
      label: "Titolo",
      name: "title",
      type: "text",
      required: true,
    },
    {
      label: "Sottotitolo",
      name: "subtitle",
      type: "text",
      required: true,
    },
    {
      label: "Immagine",
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};
