import { UpdateLang } from "@/features/langSwitcher";
import { GeoDataForm } from "@/features/searchGeoData";
import { ThemeSwitcher } from "@/features/themeSwitcher";

import { HeaderLayout } from "./headerLayout";
import { Logo } from "./logo";
import { MainNav } from "./main-nav";

export const AppHeader = () => {
    return (
        <HeaderLayout
            className=""
            logo={<Logo />}
            nav={<MainNav />}
            feature={<GeoDataForm />}
            actions={<UpdateLang />}
            theme={<ThemeSwitcher />}
        />
    );
};
