/* eslint-disable  node/no-process-env */
import path from "node:path";
import { fileURLToPath } from "node:url";
// storage-adapter-import-placeholder
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { it, itTranslations } from "@payloadcms/translations/languages/it";
import { generateTitle, generateURL } from "@repo/shared/lib/generate-meta";
import { buildConfig } from "payload";
import sharp from "sharp";
import { LandingCategories } from "./collections/landing-categories";
import { Landings } from "./collections/landings";
import { Media } from "./collections/media";
import { Organizations } from "./collections/organizations";
import { Stores } from "./collections/stores";
import { Users } from "./collections/users";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const corsOrigins = {
  development: ["http://localhost:3000"],
  production: ["https://google.com"],
  test: ["*"],
};

export default buildConfig({
  cors: {
    origins: corsOrigins[process.env.NODE_ENV || "development"],
  },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Stores, Organizations, Landings, LandingCategories],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
    autoGenerate: true,
    declare: false,
  },
  telemetry: false,
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || "",
    },
  }),
  i18n: {
    fallbackLanguage: "it",
    supportedLanguages: { it },
    translations: {
      it: itTranslations,
    },
  },
  sharp,
  plugins: [
    seoPlugin({
      generateTitle,
      generateURL,
    }),
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
});
