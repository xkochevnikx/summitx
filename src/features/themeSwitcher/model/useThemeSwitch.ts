"use client";

import { setCookie } from "cookies-next";
import { useEffect } from "react";

import { Theme } from "@/shared/constants/theme";
import { saveThemeStorage } from "@/shared/lib/providers/themeSwitchProvider/safeThemeStorage";
import { ThemeContext } from "@/shared/lib/providers/themeSwitchProvider/themeSwitchProvider";
import { useStrictContext } from "@/shared/lib/react";

type UseThemeResult = {
    toggleTheme: () => void;
    theme: Theme;
};

/**
 * Хук для получения текущей темы и функции для её переключения.
 * Тема может быть светлой или тёмной и сохраняется в localStorage для сохранения выбора пользователя между сессиями,
 * а также записывается в cookie для серверной синхронизации.
 *
 * @returns {UseThemeResult} Объект, содержащий текущую тему и функцию для её переключения.
 *
 * @example
 * // Использование хука в компоненте
 * const { theme, toggleTheme } = useTheme();
 *
 * // Текущая тема:
 * console.log(theme);
 *
 * // Переключение темы:
 * toggleTheme();
 */
export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useStrictContext(ThemeContext);

    // Подписка на изменения темы в localStorage и запись темы в cookie
    useEffect(() => {
        const unSubscribe = saveThemeStorage.subscribe((newValue: string) => {
            setTheme?.(newValue as Theme); // Установка темы в состояние
            setCookie("theme", newValue); // Запись темы в cookie для серверной синхронизации
        });

        return () => unSubscribe();
    }, [setTheme]);

    /**
     * Функция для переключения темы между светлой и тёмной.
     * Новая тема сохраняется в localStorage и записывается в cookie.
     */
    const toggleTheme = () => {
        let newTheme: Theme;

        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;
            case Theme.LIGHT:
                newTheme = Theme.DARK;
                break;
            default:
                newTheme = Theme.LIGHT;
        }

        setTheme?.(newTheme); // Устанавливаем новую тему в состояние
        setCookie("theme", newTheme); // Сохраняем тему в cookie
        saveThemeStorage.set(newTheme); // Сохраняем тему в localStorage
    };

    return {
        theme: theme ?? Theme.LIGHT, // Возвращаем текущую тему
        toggleTheme, // Возвращаем функцию для переключения темы
    };
}
