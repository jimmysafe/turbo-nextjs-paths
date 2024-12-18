import type { CollectionConfig } from "payload";
import { slugField } from "@/fields/slug";

export const LandingCategories: CollectionConfig = {
  slug: "landing-categories",
  labels: {
    singular: "Categoria Landing",
    plural: "Categorie Landing",
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
    ...slugField("name"),
    {
      name: "landings",
      type: "join",
      hasMany: true,
      admin: {
        allowCreate: true,
      },
      collection: "landings",
      on: "category",
    },
  ],
};
