import { logger } from "./pinoConfig";
import { sentryCaptureExceptionFailsafe } from "./sentryCapture";

/**
 * Создает метод с логированием входных параметров, результатов и ошибок.
 *
 * @template A - Тип аргументов функции.
 * @template R - Тип результата функции.
 * @param {Object} options - Опции для логирования.
 * @param {string} [options.msg] - Сообщение для логов.
 * @param {(args: A) => unknown} [options.logArgs] - Логирует аргументы функции.
 * @param {(res: R, args: A) => unknown} [options.logRes] - Логирует результат функции.
 * @returns {Function} - Функция-обертка с логированием.
 */
export const loggedMethod = <A extends any[] = any[], R = any>({
    msg,
    logRes,
    logArgs,
}: {
    msg?: string;
    logArgs?: (...args: A) => unknown;
    logRes?: (res: R, ...args: A) => unknown;
}) => {
    return function <T extends (...args: A) => Promise<R>>(target: T) {
        return async function (...args: Parameters<T>): Promise<ReturnType<T> | void> {
            const methodName = target.name;

            logger.info({
                methodName,
                msg: `✅ Вызов ${methodName}: ${msg ?? ""}`,
                args: logArgs?.(...args),
            });

            try {
                const result = await target(...args);

                logger.info({
                    methodName,
                    msg: `🚀 Результат ${methodName}: ${msg ?? ""}`,
                    data: logRes?.(result as R, ...args),
                });

                return result as ReturnType<T>;
            } catch (error: unknown) {
                logger.error({
                    methodName,
                    msg: `⛔️ Ошибка ${methodName}: ${msg ?? ""}`,
                    error,
                });
                sentryCaptureExceptionFailsafe(error);
                return;
            }
        };
    };
};
