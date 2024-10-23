"use client";

import { useTheme } from "@/features/themeSwitcher";
import { classNames } from "@/shared/lib/classNames";
import { HeaderLayout, Logo, MainNav } from "@/widgets/app-header";
import { Sidebar, SidebarSwitcher } from "@/widgets/sidebar";
export function OpenLayout({ children }: { children?: React.ReactNode }) {
    const { theme } = useTheme();

    return (
        <div className={classNames(``, {}, [theme])}>
            <HeaderLayout nav={<MainNav />} logo={<Logo />} sidebarSwitch={<SidebarSwitcher />} />
            <main>{children}</main>
            <Sidebar />
        </div>
    );
}
