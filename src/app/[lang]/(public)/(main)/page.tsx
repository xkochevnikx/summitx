import { Suspense } from "react";

import { GeoDataForm, GeoDataList } from "@/features/lifeSearchGeoData";
import { getRegionsQuery, organizeRanges, RegionsList } from "@/features/organizeRanges";
import { langGuard } from "@/shared/lib/languageGuard";
import { queryClient } from "@/shared/lib/query";

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
        <Suspense fallback={<div>Loading...</div>}>
            <RegionsList regions={regions} />
            <GeoDataForm />
            <GeoDataList />
        </Suspense>
    );
}
