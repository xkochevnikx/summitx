import * as Sentry from "@sentry/nextjs";

import { logger } from "./pinoConfig";

/**
 * Функция `sentryCaptureExceptionFailsafe` предназначена для безопасной отправки исключений в Sentry.
 * Если отправка ошибки в Sentry завершится неудачно, ошибка будет залогирована с использованием встроенного логгера.
 *
 * @param {unknown} err - Ошибка или исключение, которые нужно отправить в Sentry.
 */
export const sentryCaptureExceptionFailsafe = (err: unknown) => {
    try {
        // Попытка отправить исключение в Sentry
        Sentry.captureException(err);
    } catch (e) {
        // Если отправка в Sentry не удалась, ошибка логируется
        const msg = `Couldn't send error to sentry, reason ${
            e instanceof Error ? e.message : "unknown"
        }`;

        // Логирование ошибки через встроенный логгер
        logger.error({
            methodName: "sentryCaptureExceptionFailsafe",
            msg: `⛔️ Error: ${msg}`,
        });
    }
};
