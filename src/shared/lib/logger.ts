import * as Sentry from "@sentry/nextjs";
import Pino from "pino";

export const logger = Pino();

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
            } catch (error) {
                logger.error({
                    methodName,
                    msg: `⛔️ Error ${methodName}: ${msg ?? ""}`,
                    error,
                });
                Sentry.captureException(error);
                return;
            }
        };
    };
};
