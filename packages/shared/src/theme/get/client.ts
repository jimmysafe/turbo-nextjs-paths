"use client";
export function useTheme() {
  const host = window.location.host;
  const subdomain = host?.split(".")[0] || "default";
  return subdomain;
}
