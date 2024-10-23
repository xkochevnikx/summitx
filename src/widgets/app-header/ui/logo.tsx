import Link from "next/link";

import cls from "./headerLayout.module.css";

export function Logo() {
    return (
        <Link className={cls.navLogo} href="/">
            <span>SUMMITX</span>
        </Link>
    );
}
