import * as Sentry from "@sentry/nextjs";

Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    environment: process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT,
    // "https://e38053951e9b24bdbe4409386f673911@o4507520259522560.ingest.de.sentry.io/4507520261881936",
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
