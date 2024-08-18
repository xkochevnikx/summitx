import { logger } from "./pinoConfig";
import { sentryCaptureExceptionFailsafe } from "./sentryCapture";

export const loggedMethod = <A extends any[] = any[], R = any>({
    msg,
    logRes,
    logArgs,
}: {
    msg?: string;
    logArgs?: (...args: A) => unknown;
    logRes?: (res: R, ...args: A) => unknown;
}) => {
    return function <T extends (...args: A) => Promise<R>>(
        target: T,
    ): (...args: Parameters<T>) => Promise<ReturnType<T> | void> {
        return async function (...args: Parameters<T>): Promise<ReturnType<T> | void> {
            const methodName = target.name;

            logger.info({
                methodName,
                msg: `✅ Call ${methodName}: ${msg ?? ""}`,
                args: logArgs?.(...args),
            });

            try {
                const result = await target(...args);

                logger.info({
                    methodName,
                    msg: ` 🚀 Result ${methodName}: ${msg ?? ""}`,
                    data: logRes?.(result as R, ...args),
                });

                return result as ReturnType<T>;
            } catch (error: unknown) {
                logger.error({
                    methodName,
                    msg: `⛔️ Error ${methodName}: ${msg ?? ""}`,
                    error,
                });
                sentryCaptureExceptionFailsafe(error);
                return;
            }
        };
    };
};
