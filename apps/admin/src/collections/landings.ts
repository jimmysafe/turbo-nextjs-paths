import type { CollectionConfig } from "payload";
import { LandingHero } from "@/blocks/hero/config";
import { StickyBar } from "@/blocks/sticky-bar/config";
import { slugField } from "@/fields/slug";
import { MetaDescriptionField, MetaImageField, MetaTitleField, OverviewField, PreviewField } from "@payloadcms/plugin-seo/fields";

export const Landings: CollectionConfig = {
  slug: "landings",
  labels: {
    singular: "Landing",
    plural: "Landings",
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      label: "Nome",
      name: "name",
      type: "text",
      required: true,
    },
    {
      label: "Categoria",
      name: "category",
      type: "relationship",
      relationTo: "landing-categories",
      admin: {
        position: "sidebar",
      },
      required: true,
    },
    {
      label: "Tipologia",
      name: "type",
      type: "select",
      defaultValue: "landing",
      required: true,
      admin: {
        position: "sidebar",
      },
      options: [
        { label: "Landing", value: "landing" },
        { label: "Proponi", value: "proponi" },
        { label: "Landing Custom", value: "landing custom" },
      ],
    },
    {
      label: "Stato",
      name: "stato",
      type: "select",
      defaultValue: "in attesa",
      required: true,
      admin: {
        position: "sidebar",
      },
      options: [
        { label: "In Attesa", value: "in attesa" },
        { label: "Non Approvato", value: "non approvato" },
        { label: "Approvato", value: "approvato" },
      ],
    },
    {
      label: "Negozio",
      name: "negozio",
      type: "relationship",
      relationTo: "stores",
      admin: {
        position: "sidebar",
        condition: (data) => {
          if (data.type === "landing custom")
            return true;
          return false;
        },
      },
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Contenuto",
          fields: [
            {
              name: "layout",
              type: "blocks",
              blocks: [StickyBar, LandingHero],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
        },
        {
          label: "Impostazioni",
          fields: [
            {
              label: "Forza in carosello",
              name: "forceCarosello",
              type: "checkbox",
            },
            {
              label: "Forza in evidenza",
              name: "forceEvidenza",
              type: "checkbox",
            },
          ],
        },
        {
          name: "meta",
          label: "SEO",
          fields: [
            OverviewField({
              titlePath: "meta.title",
              descriptionPath: "meta.description",
              imagePath: "meta.image",
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: "media",
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: "meta.title",
              descriptionPath: "meta.description",
            }),
          ],
        },
      ],
    },
    ...slugField("name"),
  ],
};
