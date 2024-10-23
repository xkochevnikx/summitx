"use client";
import { ReactNode } from "react";

import cls from "./headerLayout.module.css";

export const HeaderLayout = ({
    logo,
    sidebarSwitch,
    nav,
}: {
    nav?: ReactNode;
    sidebarSwitch?: ReactNode;
    logo?: ReactNode;
}) => {
    return (
        <header className={cls.header}>
            <nav className={cls.nav}>
                {logo}
                {nav}
            </nav>
            <div className={cls.sidebarSwitch}>{sidebarSwitch}</div>
        </header>
    );
};
