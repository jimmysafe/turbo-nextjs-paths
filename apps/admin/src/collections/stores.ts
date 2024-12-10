import type { CollectionConfig } from "payload";

export const Stores: CollectionConfig = {
  slug: "stores",
  labels: {
    singular: "Negozio",
    plural: "Negozi",
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
    },
    {
      label: "Indirizzo",
      name: "address",
      type: "text",
    },
    {
      label: "Città",
      name: "city",
      type: "text",
    },
  ],
};
