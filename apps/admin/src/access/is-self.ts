import type { Access } from "payload";

export const isSelf: Access = ({ req }) => {
  if (!req?.user)
    return false;
  return {
    id: {
      equals: req.user.id,
    },
  };
};
