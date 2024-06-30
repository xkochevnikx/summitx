import { ReactNode } from "react";

export function UiHeader({
    // className,
    right,
    links,
}: {
    className?: string;
    links?: ReactNode;
    right?: ReactNode;
}) {
    return (
        <header>
            {links}

            {right}
        </header>
    );
}
