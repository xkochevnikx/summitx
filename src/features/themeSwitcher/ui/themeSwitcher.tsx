"use client";

import Image from "next/image";

import darkThemeIcon from "@/shared/assets/icons/darkTheme.svg";
import lightThemeIcon from "@/shared/assets/icons/lightTheme.svg";
import { Theme } from "@/shared/constants/theme";
import { Button } from "@/shared/ui/button/button";

import { useTheme } from "../model/useThemeSwitch";

/**
 * Компонент для переключения темы между светлой и тёмной.
 * Отображает иконку в зависимости от текущей темы и предоставляет кнопку для её переключения.
 *
 * @param {Object} props - Свойства компонента.
 * @param {string} props.className - Дополнительный класс для стилизации компонента.
 *
 * @returns {JSX.Element} Кнопка для переключения темы с соответствующей иконкой.
 *
 * @example
 * // Использование ThemeSwitcher в компоненте
 * <ThemeSwitcher className="my-custom-class" />
 */
export const ThemeSwitcher = (): JSX.Element => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button theme="clear" onClick={toggleTheme}>
            <Image
                src={theme === Theme.LIGHT ? darkThemeIcon : lightThemeIcon}
                alt="Theme icon"
                width="20"
                height="20"
            />
        </Button>
    );
};
