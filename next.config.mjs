import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* eslint-disable no-undef */
import { withSentryConfig } from "@sentry/nextjs";
/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias["@"] = path.join(__dirname, "src");
        return config;
    },
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
    authToken: process.env.SENTRY_AUTH_TOKEN,
    telemetry: false,
    org: "summitx",
    project: "javascript-nextjs",
    enabled: process.env.NODE_ENV === "production",
    widenClientFileUpload: true,
    hideSourceMaps: true,
    disableLogger: true,
});
