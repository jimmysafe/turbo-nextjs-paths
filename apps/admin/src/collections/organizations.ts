import type { CollectionConfig } from "payload";

export const Organizations: CollectionConfig = {
  slug: "organizations",
  labels: {
    singular: "Ragione Sociale",
    plural: "Ragioni Sociali",
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Informazioni Generali",
          fields: [
            {
              label: "Nome",
              name: "name",
              type: "text",
              required: true,
            },
            {
              label: "Partita IVA",
              name: "partitaIva",
              type: "text",
              required: true,
            },
            {
              label: "Codice Fiscale",
              name: "codiceFiscale",
              type: "text",
              required: true,
            },
            {
              label: "Imprenditore",
              name: "imprenditore",
              type: "relationship",
              relationTo: "users",
              filterOptions: () => ({
                roles: { equals: "imprenditore" },
              }),
              required: true,
            },
          ],
        },
        {
          label: "Contatti",
          fields: [
            {
              label: "Telefono",
              name: "telefono",
              type: "text",
              required: true,
            },
            {
              label: "Telefono (alternativo)",
              name: "telefonoAlt",
              type: "text",
            },
            {
              label: "Email",
              name: "email",
              type: "text",
              required: true,
            },
            {
              label: "Pec",
              name: "pec",
              type: "text",
            },
          ],
        },
        {
          label: "Bisuite",
          fields: [
            {
              label: "BSCLOUDIR",
              name: "bscloudir",
              type: "text",
            },
            {
              label: "BSCHV",
              name: "bschv",
              type: "text",
            },
            {
              label: "BS_SUBDIR_ISTANZA",
              name: "bsSubdirIstanza",
              type: "text",
            },
          ],
        },
        {
          label: "Sede Legale",
          fields: [
            {
              label: "Indirizzo",
              name: "sedeLegaleIndirizzo",
              type: "text",
            },
            {
              label: "Civico",
              name: "sedeLegaleCivico",
              type: "text",
            },
            {
              label: "CAP",
              name: "sedeLegaleCap",
              type: "text",
            },
            {
              label: "Città",
              name: "sedeLegaleCitta",
              type: "text",
            },
            {
              label: "Provincia",
              name: "sedeLegaleProvincia",
              type: "text",
            },
          ],
        },
        {
          label: "Sede Operativa",
          fields: [
            {
              label: "Indirizzo",
              name: "sedeOperativaIndirizzo",
              type: "text",
            },
            {
              label: "Civico",
              name: "sedeOperativaCivico",
              type: "text",
            },
            {
              label: "CAP",
              name: "sedeOperativaCap",
              type: "text",
            },
            {
              label: "Città",
              name: "sedeOperativaCitta",
              type: "text",
            },
            {
              label: "Provincia",
              name: "sedeOperativaProvincia",
              type: "text",
            },
          ],
        },
        {
          label: "Negozi",
          fields: [
            {
              name: "stores",
              type: "join",
              hasMany: true,
              admin: {
                allowCreate: true,
              },
              collection: "stores",
              on: "organization",
            },
          ],
        },
      ],
    },
  ],
};
