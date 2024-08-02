import { UpdateLang } from "@/features/i18n";
import { GeoDataForm } from "@/features/searchGeoData";

import { HeaderLayout } from "./headerLayout";
import { Logo } from "./logo";
import { MainNav } from "./main-nav";

export function AppHeader({ variant }: { variant: "auth" | "private" | "public" }) {
    const isProfile = variant !== "auth";
    return (
        <HeaderLayout
            className=""
            logo={<Logo />}
            nav={<MainNav />}
            feature={<GeoDataForm />}
            actions={<UpdateLang />}
            profile={isProfile && <span>profile</span>}
        />
    );
}
