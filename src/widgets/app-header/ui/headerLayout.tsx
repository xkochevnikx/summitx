import { ReactNode } from "react";

export function HeaderLayout({
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
}) {
    return (
        <header style={{ display: "flex", gap: "10px" }} className={className}>
            {logo}
            {nav}
            {actions}
            {profile}
        </header>
    );
}
