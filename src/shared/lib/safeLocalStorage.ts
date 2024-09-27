/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { ZodSchema } from "zod";

/**
 * safeLocalStorage - функция для безопасного взаимодействия с localStorage с использованием схем валидации от `zod`.
 *
 * @template T - Тип данных, который будет сохраняться и извлекаться из localStorage.
 * @param {string} key - Ключ, под которым будут сохраняться данные в localStorage.
 * @param {ZodSchema<T>} schema - Схема валидации от `zod`, используемая для проверки данных перед сохранением и после извлечения.
 * @param {T} defaultValue - Значение по умолчанию, которое будет возвращено в случае отсутствия данных или ошибки валидации.
 *
 * @returns {{
 *  get: () => T,
 *  set: (value: T) => void,
 *  clear: () => void,
 *  subscribe: (callback: (newValue: T) => void) => () => void
 * }} - Возвращает объект с четырьмя методами:
 *   - `get`: Извлекает данные из localStorage, валидирует их и возвращает. Если данные отсутствуют или не проходят валидацию, возвращает значение по умолчанию.
 *   - `set`: Валидирует данные перед их сохранением в localStorage. В случае успешной валидации сохраняет данные в localStorage.
 *   - `clear`: Удаляет данные из localStorage по указанному ключу.
 *   - `subscribe`: Позволяет подписаться на изменения данных в localStorage для указанного ключа. При изменении данных вызывает переданный callback с новым значением. Возвращает функцию для отмены подписки.
 */
export function safeLocalStorage<T>(key: string, schema: ZodSchema<T>, defaultValue: T) {
    const isWindow = typeof window !== "undefined";

    const get = (): T => {
        try {
            const value = localStorage.getItem(key);

            if (!value) {
                return defaultValue;
            }

            // Используем zod для валидации данных
            const parsed = schema.parse(JSON.parse(value));
            return parsed as T;
        } catch (e) {
            console.error(`Failed to get and validate data from localStorage for key "${key}":`, e);
            return defaultValue;
        }
    };

    const set = (value: T) => {
        try {
            // Валидация данных с помощью zod
            const validatedValue = schema.parse(value);
            localStorage.setItem(key, JSON.stringify(validatedValue));
        } catch (e) {
            console.error(`Failed to set data in localStorage for key "${key}":`, e);
        }
    };

    const clear = () => {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.error(`Failed to clear data from localStorage for key "${key}":`, e);
        }
    };

    const subscribe = (callback: (newValue: T) => void) => {
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === key) {
                const newValue = e.newValue && JSON.parse(e.newValue);
                let validatedValue;
                try {
                    // Валидация новых данных с помощью zod
                    validatedValue = schema.parse(newValue);
                    callback(validatedValue);
                } catch (e) {
                    console.error(
                        `Failed to validate new value from localStorage for key "${key}":`,
                        e,
                    );
                }
            }
        };

        if (isWindow) {
            window.addEventListener("storage", handleStorageChange);
        }

        return () => {
            if (isWindow) {
                window.removeEventListener("storage", handleStorageChange);
            }
        };
    };

    return { clear, get, set, subscribe };
}
