import { GeoDataForm } from "@/features/searchGeoData";
import { classNames } from "@/shared/lib/classNames";
import { Overlay } from "@/shared/ui/overlay/overlay";

import { useSidebar } from "../model/sidebar.store";

import cls from "./sidebar.module.css";

export const Sidebar = () => {
    const { status, setStatus } = useSidebar();

    return (
        <aside className={classNames(cls.sidebar, { [cls.open]: status })}>
            <Overlay onClick={setStatus} />
            <div className={cls.content}>
                <span>ФРОНТЕНДЕР БАЙКЕ</span>
                <GeoDataForm onClose={setStatus} />
            </div>
        </aside>
    );
};
