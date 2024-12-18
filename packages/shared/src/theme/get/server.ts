"use server";

import { headers } from "next/headers";

export async function getTheme() {
  const h = await headers();
  const host = h.get("host");
  const subdomain = host?.split(".")[0] || "default";
  return subdomain;
}
