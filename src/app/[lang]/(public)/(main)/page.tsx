import { Suspense } from "react";

import { getRegionsQuery, organizeRanges, RegionsList } from "@/features/organizeRanges";
import { GeoDataForm, GeoDataList } from "@/features/searchGeoData";
import { langGuard } from "@/shared/lib/languageGuard";
import { queryClient } from "@/shared/lib/query";

import cls from "./page.module.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "",
    description: "",
};

export default async function Page({ params: { lang } }: { params: { lang: string } }) {
    const language = langGuard(lang);

    const regions = await queryClient.fetchQuery(
        getRegionsQuery({
            organizeRanges,
            lang: language ?? "ru",
        }),
    );

    return (
        <div className={cls.container}>
            <Suspense fallback={<div>Loading...</div>}>
                <RegionsList regions={regions} />
            </Suspense>
            <div className={cls.geoData}>
                <GeoDataForm />
                <GeoDataList />
            </div>
        </div>
    );
}
