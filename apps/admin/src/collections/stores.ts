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
      label: "Ragione Sociale",
      name: "organization",
      type: "relationship",
      relationTo: "organizations",
      required: true,
    },
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
              label: "Identificativo",
              name: "sub",
              type: "text",
              required: true,
              unique: true,
            },
            {
              label: "Tipo Vetrina",
              name: "vetrinaType",
              defaultValue: "full",
              type: "select",
              options: [
                { label: "Full", value: "full" },
                { label: "Lite", value: "lite" },
              ],
              required: true,
            },
            {
              label: "Foto",
              name: "foto",
              type: "upload",
              relationTo: "media",
            },
            {
              label: "Testo Sezione Assicurazioni",
              name: "assicurazioniText",
              type: "text",
            },

          ],
        },
        {
          label: "Bisuite",
          fields: [
            {
              label: "Numero PDV",
              name: "numeroPdv",
              type: "text",
              required: true,
              unique: true,
            },
            {
              label: "Dominio Bisuite",
              name: "bisuiteDomain",
              type: "select",
              defaultValue: "w01.bisuite.it",
              options: [
                { label: "bisuite.it", value: "bisuite.it" },
                { label: "w01.bisuite.it", value: "w01.bisuite.it" },
              ],
            },
            {
              label: "BSID",
              name: "bsid",
              type: "text",
            },
            {
              label: "BSCC",
              name: "bscc",
              type: "text",
            },
            {
              label: "BSDS",
              name: "bsds",
              type: "text",
            },
            {
              label: "BSCAL",
              name: "bscal",
              type: "text",
            },
          ],
        },
        {
          label: "Orari",
          fields: [{
            label: "Orari",
            name: "orari",
            type: "array",
            maxRows: 7,
            minRows: 7,
            fields: [
              {
                label: "Giorno",
                name: "giorno",
                type: "select",
                options: [
                  { label: "Lunedì", value: "lun" },
                  { label: "Martedì", value: "mar" },
                  { label: "Mercoledì", value: "mer" },
                  { label: "Giovedì", value: "gio" },
                  { label: "Venerdì", value: "ven" },
                  { label: "Sabato", value: "sab" },
                  { label: "Domenica", value: "dom" },
                ],
              },
              {
                label: "Orario Apertura 1",
                name: "apertura_1",
                defaultValue: "09:00",
                type: "text",
              },
              {
                label: "Orario Apertura 2",
                name: "apertura_2",
                defaultValue: "16:00",
                type: "text",
              },
              {
                label: "Orario Chiusura 1",
                name: "chiusura_1",
                defaultValue: "13:00",
                type: "text",
              },
              {
                label: "Orario Chiusura 2",
                name: "chiusura_2",
                defaultValue: "20:00",
                type: "text",
              },
              {
                label: "Aperto",
                name: "aperto",
                defaultValue: true,
                type: "checkbox",
              },
              {
                label: "Orario Continuato",
                name: "continuato",
                defaultValue: false,
                type: "checkbox",
              },
            ],
          }],
        },
        {
          label: "Social",
          fields: [
            {
              label: "Profilo Facebook",
              name: "social_fb",
              type: "text",
            },
            {
              label: "Profilo Instagram",
              name: "social_ig",
              type: "text",
            },
            {
              label: "Profilo Youtube",
              name: "social_yt",
              type: "text",
            },
            {
              label: "Profilo X (Twitter)",
              name: "social_tw",
              type: "text",
            },
            {
              label: "Profilo TikTok",
              name: "social_tt",
              type: "text",
            },
            {
              label: "Profilo Google My Business",
              name: "social_gg",
              type: "text",
            },
          ],
        },
        {
          label: "Contatti",
          fields: [
            {
              label: "Link a Google Maps",
              name: "linkMappa",
              type: "text",
            },
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
              label: "Numero Whatsapp",
              name: "whatsapp",
              type: "text",
            },
            {
              label: "Email",
              name: "email",
              type: "text",
            },
            {
              label: "Codice Centralino",
              name: "codiceCentralino",
              type: "text",
            },

          ],
        },
        {
          label: "Analitica",
          fields: [
            {
              label: "Umami Site ID",
              name: "analytics_share_id",
              type: "text",
            },
            {
              label: "Umami Share ID",
              name: "analytics_id",
              type: "text",
            },
          ],
        },
        {
          label: "Indirizzo",
          fields: [
            {
              label: "Indirizzo",
              name: "indirizzo",
              type: "text",
              required: true,
            },
            {
              label: "Civico",
              name: "civico",
              type: "text",
            },
            {
              label: "CAP",
              name: "cap",
              type: "text",
              required: true,
            },
            {
              label: "Cittá",
              name: "citta",
              type: "text",
              required: true,
            },
            {
              label: "Provincia",
              name: "provincia",
              type: "text",
              required: true,
            },
          ],
        },
        {
          label: "Team",
          fields: [
            {
              label: "Il Team",
              name: "team",
              type: "array",
              maxRows: 5,
              fields: [
                {
                  label: "Nome",
                  name: "nome",
                  type: "text",
                  required: true,
                },
                {
                  label: "Ruolo",
                  name: "ruolo",
                  type: "text",
                  required: true,
                },
                {
                  label: "Foto",
                  name: "foto",
                  type: "upload",
                  relationTo: "media",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
