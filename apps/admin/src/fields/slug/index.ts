import type { CheckboxField, TextField } from "payload";

import { formatSlugHook } from "./format-slug";

interface Overrides {
  slugOverrides?: Partial<TextField>;
  checkboxOverrides?: Partial<CheckboxField>;
}

type Slug = (fieldToUse?: string, overrides?: Overrides) => [TextField, CheckboxField];

export const slugField: Slug = (fieldToUse = "title", overrides = {}) => {
  const { slugOverrides, checkboxOverrides } = overrides;

  const checkBoxField: CheckboxField = {
    name: "slugLock",
    type: "checkbox",
    defaultValue: true,
    admin: {
      hidden: true,
      position: "sidebar",
    },
    ...checkboxOverrides,
  };

  // @ts-expect-error Expect ts error here because of typescript mismatching Partial<TextField> with TextField
  const slugField: TextField = {
    name: "slug",
    type: "text",
    index: true,
    label: "Slug",
    ...(slugOverrides || {}),
    hooks: {
      beforeValidate: [formatSlugHook(fieldToUse)],
    },
    admin: {
      position: "sidebar",
      ...(slugOverrides?.admin || {}),
      components: {
        Field: {
          path: "@/fields/slug/slug.component#SlugComponent",
          clientProps: {
            fieldToUse,
            checkboxFieldPath: checkBoxField.name,
          },
        },
      },
    },
  };

  return [slugField, checkBoxField];
};
