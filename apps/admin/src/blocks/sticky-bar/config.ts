import type { Block } from "payload";
import { BoldFeature, InlineToolbarFeature, ItalicFeature, lexicalEditor, ParagraphFeature, UnderlineFeature } from "@payloadcms/richtext-lexical";

export const StickyBar: Block = {
  slug: "sticky-bar",
  interfaceName: "StickyBarBlock",
  fields: [
    {
      label: "Testo",
      name: "text",
      type: "richText",
      required: true,
      editor: lexicalEditor({
        features: () => {
          return [
            ParagraphFeature(),
            BoldFeature(),
            ItalicFeature(),
            UnderlineFeature(),
            InlineToolbarFeature(),
          ];
        },
      }),
    },
  ],
};
