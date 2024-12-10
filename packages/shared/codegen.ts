import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4000/api/graphql",
  documents: ["../../apps/main/**/*.tsx"],
  ignoreNoDocuments: true,
  generates: {
    "./src/generated/": {
      preset: "client",
      config: {
        documentMode: "string",
      },
    },
    "./src/generated/schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
  },
};

export default config;
