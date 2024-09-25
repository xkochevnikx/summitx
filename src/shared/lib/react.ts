import { Context, createContext, useContext } from "react";

/**
 * Хук для использования контекста с обязательной проверкой наличия значения.
 * @template T - Тип значения, которое хранится в контексте.
 *
 * @param {Context<T | null>} context - Контекст, который может быть `null` по умолчанию.
 * @returns {T} - Значение контекста, если оно было передано.
 * @throws {Error} - Если значение контекста равно `null`, выбрасывается ошибка с сообщением "Strict context not passed".
 *
 * Этот хук предназначен для ситуаций, когда значение контекста всегда должно быть доступно.
 * Если оно отсутствует, вызывается ошибка, чтобы разработчик мог отследить неправильное использование.
 */
export function useStrictContext<T>(context: Context<T | null>) {
    const value = useContext(context);
    if (value === null) throw new Error("Strict context not passed");
    return value as T;
}

/**
 * Функция для создания строгого контекста, который требует обязательного значения при его использовании.
 * @template T - Тип значения, которое будет храниться в контексте.
 *
 * @returns {Context<T | null>} - Возвращает новый контекст, который может содержать либо значение типа `T`, либо `null`.
 *
 * Этот контекст рекомендуется использовать вместе с `useStrictContext`, чтобы обеспечить строгое управление состоянием и предотвратить использование контекста без значения.
 */
export function createStrictContext<T>() {
    return createContext<T | null>(null);
}
