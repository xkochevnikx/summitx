"use client";
import { ReactNode, useEffect } from "react";

import { useLang } from "@/features/i18n";

export function AppLoader({ children }: { children?: ReactNode }) {
    const loadLang = useLang((s) => s.loadLang);

    useEffect(() => {
        loadLang();
    }, [loadLang]);

    return <>{children}</>;
}
