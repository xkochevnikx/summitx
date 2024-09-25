import { createStrictContext, useStrictContext } from "./react";

/**
 * Контекст для хранения текущего языка приложения.
 */
const langContext = createStrictContext<string>();

/**
 * Провайдер для языка. Обеспечивает доступ к текущему языку через контекст для дочерних компонентов.
 *
 * @param {string} lang - Текущий язык (например, "ru", "en").
 * @param {React.ReactNode} children - Дочерние компоненты, которым будет доступен контекст языка.
 * @returns {JSX.Element} - Провайдер для контекста языка.
 */
export function I18nProvider({ lang, children }: { lang: string; children?: React.ReactNode }) {
    return <langContext.Provider value={lang}>{children}</langContext.Provider>;
}

/**
 * Создает модуль интернационализации для использования переводов.
 *
 * @template T - Тип, представляющий объект переводов, где ключи — это строки ключевых фраз, а значения — это объект, содержащий переводы для разных языков.
 * @param {T} translations - Объект с переводами, где ключи — это идентификаторы строк, а значения — это объекты с переводами для разных языков.
 * @returns {Function} - Хук для использования переводов в компонентах.
 *
 * @example
 * const translations = {
 *   hello: { en: "Hello", ru: "Привет" },
 *   goodbye: { en: "Goodbye", ru: "До свидания" }
 * };
 *
 * const useI18n = createI18nModule(translations);
 *
 * function MyComponent() {
 *   const { t } = useI18n();
 *   return <div>{t("hello")}</div>; // Отобразит "Привет", если текущий язык "ru".
 * }
 */
export function createI18nModule<T extends Record<string, Record<string, string>>>(
    translations: T,
) {
    return function useI18n() {
        const lang = useStrictContext(langContext);

        return {
            /**
             * Функция для получения перевода по ключу.
             *
             * @param {keyof T} key - Ключ фразы для перевода.
             * @returns {string} - Переведенная строка для текущего языка. Если перевод не найден, возвращает сам ключ.
             */
            t: (key: keyof T) => {
                return translations[key]?.[lang as string] ?? key;
            },
        };
    };
}

/**
 * Хук для получения текущего языка.
 *
 * @returns {string} - Текущий язык из контекста.
 */
export function useLang() {
    const lang = useStrictContext(langContext);
    return lang;
}
