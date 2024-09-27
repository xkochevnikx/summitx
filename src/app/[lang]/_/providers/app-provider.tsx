"use client";
import { useLang } from "@/features/langSwitcher";
import { LangSwitchProvider } from "@/shared/lib/providers/langSwitchProvider";
import { ThemeSwitchProvider } from "@/shared/lib/providers/themeSwitchProvider/themeSwitchProvider";

/**
 * Компонент провайдера для управления темой и языком приложения.
 * Оборачивает дочерние компоненты в контексты для управления темой и языком.
 *
 * @component
 * @param {object} props - Свойства компонента.
 * @param {React.ReactNode} [props.children] - Дочерние компоненты, которые будут иметь доступ к теме и языку.
 * @param {string} props.initialTheme - Начальная тема, переданная в провайдер.
 *
 * @returns {JSX.Element} Компонент, оборачивающий дочерние элементы в провайдеры ThemeSwitchProvider и LangSwitchProvider.
 *
 * @example
 * <AppProvider initialTheme="dark">
 *   <YourComponent />
 * </AppProvider>
 */
export const AppProvider = ({
    children,
    initialTheme,
}: {
    children?: React.ReactNode;
    initialTheme: string;
}) => {
    const { lang } = useLang();

    return (
        <ThemeSwitchProvider initialTheme={initialTheme}>
            <LangSwitchProvider lang={lang}>{children}</LangSwitchProvider>
        </ThemeSwitchProvider>
    );
};
