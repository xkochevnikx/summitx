import Link from "next/link";

import cls from "./headerLayout.module.css";

type LinkItem = {
    href: string;
    label: string;
};

const HEADER_LINKS: LinkItem[] = [
    { href: "/about", label: "about" },
    { href: "/sentry-example-page", label: "sentry" },
];

export function MainNav() {
    return (
        <div className={cls.navLinkWrapper}>
            {HEADER_LINKS.map((link, index) => (
                <Link key={index} className={cls.navLink} href={link.href}>
                    {link.label.toUpperCase()}
                </Link>
            ))}
        </div>
    );
}
