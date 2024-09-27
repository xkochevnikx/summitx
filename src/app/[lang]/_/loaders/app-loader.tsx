"use client";
import { ReactNode, useEffect } from "react";

import { useLang } from "@/features/langSwitcher";

export const AppLoader = ({ children }: { children?: ReactNode }) => {
    const { loadLang } = useLang();

    useEffect(() => {
        loadLang();
    }, [loadLang]);

    return <>{children}</>;
};
