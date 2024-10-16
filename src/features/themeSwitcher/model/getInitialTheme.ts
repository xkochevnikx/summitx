"use server";
import { cookies } from "next/headers";

/**
 * Функция для получения начальной темы из cookies на серверной стороне.
 *
 * @async
 * @function getInitialTheme
 * @returns {Promise<string>} Возвращает тему, сохранённую в cookies. Если тема не найдена, возвращает "light_theme".
 *
 * @example
 * const theme = await getInitialTheme();
 * console.log(theme); // "dark_theme" или "light_theme"
 */
export const getInitialTheme = async (): Promise<string> => {
    const cookieStore = cookies();
    const theme = cookieStore.get("theme")?.value || "light_theme";
    return theme;
};
