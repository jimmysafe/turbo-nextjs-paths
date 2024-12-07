import type { NextConfig } from "next";

// eslint-disable-next-line node/no-process-env
const { ORG_URL, SOCIAL_URL, AUTH_URL } = process.env;

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/org",
        destination: `${ORG_URL}/org`,
      },
      {
        source: "/org/:path*",
        destination: `${ORG_URL}/org/:path*`,
      },
      {
        source: "/social",
        destination: `${SOCIAL_URL}/social`,
      },
      {
        source: "/social/:path*",
        destination: `${SOCIAL_URL}/social/:path*`,
      },
      {
        source: "/auth",
        destination: `${AUTH_URL}/auth`,
      },
      {
        source: "/auth/:path*",
        destination: `${AUTH_URL}/auth/:path*`,
      },
    ];
  },
};

export default nextConfig;
