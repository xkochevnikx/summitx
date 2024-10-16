"use client";

import { useTheme } from "@/features/themeSwitcher";
import { classNames } from "@/shared/lib/classNames";
import { AppHeader } from "@/widgets/app-header";

export function OpenLayout({ children }: { children?: React.ReactNode }) {
    const { theme } = useTheme();

    return (
        <div className={classNames(``, {}, [theme])}>
            <AppHeader />
            <main>{children}</main>
        </div>
    );
}
