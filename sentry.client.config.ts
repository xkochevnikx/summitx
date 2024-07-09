import * as Sentry from "@sentry/nextjs";

import { privateConfig } from "@/shared/config/private";

Sentry.init({
    dsn: privateConfig.NEXT_PUBLIC_SENTRY_DSN,
    environment: privateConfig.NEXT_PUBLIC_SENTRY_ENVIRONMENT,
    enabled: process.env.NODE_ENV === "production",
    tracesSampleRate: 1,
    debug: false,
    replaysOnErrorSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    integrations: [
        Sentry.replayIntegration({
            maskAllText: true,
            blockAllMedia: true,
        }),
    ],
});
