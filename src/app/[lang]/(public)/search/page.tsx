import { GeoDataList } from "@/features/searchGeoData";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "SummitX",
};

export default function Page() {
    return (
        <>
            <GeoDataList />
        </>
    );
}
