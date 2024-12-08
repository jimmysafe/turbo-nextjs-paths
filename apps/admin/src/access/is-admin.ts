import type { Access } from "payload";

export const isAdmin: Access = ({ req }) => {
  if (!req?.user)
    return false;
  return Boolean(req.user.roles?.includes("admin"));
};
