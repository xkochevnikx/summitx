import { z } from "zod";

const privateConfigSchema = z.object({
    BASE_API_URL: z.string(),
    NEXT_PUBLIC_SENTRY_DSN: z.string(),
    NEXT_PUBLIC_SENTRY_ENVIRONMENT: z.string(),
    SENTRY_AUTH_TOKEN: z.string(),
});

export const privateConfig = privateConfigSchema.parse(process.env);
