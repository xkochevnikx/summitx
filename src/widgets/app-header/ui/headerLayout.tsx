import { ReactNode } from "react";

import { classNames } from "@/shared/lib/classNames";

import cls from "./headerLayout.module.css";

export const HeaderLayout = ({
    profile,
    logo,
    className,
    actions,
    nav,
}: {
    className?: string;
    profile?: ReactNode;
    nav?: ReactNode;
    actions?: ReactNode;
    logo?: ReactNode;
}) => {
    return (
        <header className={classNames(cls.header, {}, [className])}>
            <div className={cls.nav}>
                {logo}
                {nav}
            </div>
            <div className={cls.actions}>
                {actions}
                {profile}
            </div>
        </header>
    );
};
