import * as Sentry from "@sentry/nextjs";

import { logger } from "./pinoConfig";

export const sentryCaptureExceptionFailsafe = (err: unknown) => {
    try {
        Sentry.captureException(err);
    } catch (e) {
        const msg = `Couldn't send error to sentry, reason ${
            e instanceof Error ? e.message : "unknown"
        }`;
        logger.error({
            methodName: "sentryCaptureExceptionFailsafe",
            msg: `⛔️ Error: ${msg}`,
        });
    }
};
