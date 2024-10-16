"use client";

import { ReactNode, useMemo, useState } from "react";

import { Theme } from "@/shared/constants/theme";

import { createStrictContext } from "../../react";

export type ThemeContextProps = {
    theme?: Theme;
    setTheme?: (Theme: Theme) => void;
};

export const ThemeContext = createStrictContext<ThemeContextProps>();

type ThemeProviderProps = {
    children: ReactNode;
    initialTheme: string;
};

/**
 * Провайдер для переключения тем (светлая/темная).
 * Компонент отвечает за управление состоянием темы (light или dark) и его передачу через контекст.
 * Тема сохраняется в localStorage, чтобы пользователь мог сохранять выбранную тему между сессиями.
 *
 * @component
 *
 * @param {ReactNode} children - Дочерние компоненты, которые будут иметь доступ к контексту темы.
 *
 * @returns {JSX.Element} Компонент, который оборачивает детей в контекст с состоянием темы.
 *
 * @example
 * // Оберните приложение в ThemeSwitchProvider
 * <ThemeSwitchProvider>
 *   <App />
 * </ThemeSwitchProvider>
 */
export const ThemeSwitchProvider = (props: ThemeProviderProps): JSX.Element => {
    const { children, initialTheme } = props;

    // Состояние для хранения текущей темы (по умолчанию светлая тема)
    const [theme, setTheme] = useState<Theme>(initialTheme as Theme);

    // С помощью useMemo мемоизируем значение контекста для оптимизации производительности
    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
