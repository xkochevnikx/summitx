import { z } from "zod";

const privateConfigSchema = z.object({
    BASE_API_URL: z.string().optional(),
    NEXT_PUBLIC_SENTRY_DSN: z.string().optional(),
    NEXT_PUBLIC_SENTRY_ENVIRONMENT: z.string().optional(),
    SENTRY_AUTH_TOKEN: z.string().optional(),
});

export const privateConfig = privateConfigSchema.parse(process.env);
