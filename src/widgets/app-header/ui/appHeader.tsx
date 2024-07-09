import { UpdateLang } from "@/features/i18n";

import { HeaderLayout } from "./headerLayout";
import { Logo } from "./logo";
import { MainNav } from "./main-nav";

export function AppHeader({ variant }: { variant: "auth" | "private" | "public" }) {
    const isProfile = variant !== "auth";
    return (
        <HeaderLayout
            logo={<Logo />}
            nav={<MainNav />}
            actions={<UpdateLang />}
            profile={isProfile && <span>profile</span>}
        />
    );
}
