"use client";
import { ReactNode } from "react";

import { classNames } from "@/shared/lib/classNames";
import { useWindowScroll } from "@/shared/lib/hooks/useWindowScroll";

import cls from "./headerLayout.module.css";

export const HeaderLayout = ({
    theme,
    logo,
    feature,
    className,
    actions,
    nav,
}: {
    className?: string;
    theme?: ReactNode;
    feature: ReactNode;
    nav?: ReactNode;
    actions?: ReactNode;
    logo?: ReactNode;
}) => {
    const { value } = useWindowScroll();
    const isScrolled = value.y > 200;

    return (
        <header className={classNames(cls.header, { [cls.scrolled]: isScrolled }, [className])}>
            <div className={cls.nav}>
                {logo}
                {nav}
            </div>
            <div className={cls.feature}>{feature}</div>
            <div className={cls.actions}>
                {actions}
                {theme}
            </div>
        </header>
    );
};
