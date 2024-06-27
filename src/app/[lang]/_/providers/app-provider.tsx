"use client";
import { useLang } from "@/features/i18n";
import { I18nProvider } from "@/shared/lib/i18n";

export function AppProvider({ children }: { children?: React.ReactNode }) {
    const { lang } = useLang();

    return <I18nProvider lang={lang}>{children}</I18nProvider>;
}
