import type { NextConfig } from "next";

const { ORG_URL, SOCIAL_URL } = process.env

const nextConfig: NextConfig = {
    async rewrites() {
        return [
            {
                source: '/org',
                destination: `${ORG_URL}/org`,
            },
            {
                source: '/org/:path*',
                destination: `${ORG_URL}/org/:path*`,
            },
            {
                source: '/social',
                destination: `${SOCIAL_URL}/social`,
            },
            {
                source: '/social/:path*',
                destination: `${SOCIAL_URL}/social/:path*`,
            },
        ];
    },
};

export default nextConfig;
