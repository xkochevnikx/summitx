import * as Sentry from "@sentry/nextjs";
import Pino from "pino";

export const logger = Pino();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
                args: logArgs?.(...args),
                msg: `Call ${methodName}: ${msg ?? ""}`,
            });

            try {
                const result = await target(...args);

                logger.info({
                    methodName,
                    data: logRes?.(result as R, ...args),
                    msg: `Result ${methodName}: ${msg ?? ""}`,
                });

                return result as ReturnType<T>;
            } catch (error) {
                logger.error({
                    methodName,
                    error,
                    msg: `Error ${methodName}: ${msg ?? ""}`,
                });
                Sentry.captureException(error);
                return;
            }
        };
    };
};
