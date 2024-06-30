/* eslint-disable no-undef */
import { withSentryConfig } from "@sentry/nextjs";
/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        const BASE_API_URL = process.env.BASE_API_URL || "http://localhost:3000";
        return [
            {
                source: "/api/:path*",
                destination: `${BASE_API_URL}/api/:path*`,
            },
        ];
    },
};

export default withSentryConfig(nextConfig, {
    org: "summitx",
    project: "javascript-nextjs",
    enabled: process.env.NODE_ENV === "production",
    widenClientFileUpload: true,
    hideSourceMaps: true,
    disableLogger: true,
});
