import { getListGeoDataLoggedMethod } from "@/entities/geoDataList";
import { GeoDataList } from "@/features/searchGeoData";
import { isAxiosCustomError } from "@/shared/lib/errors";
import { langGuard } from "@/shared/lib/languageGuard";
import { queryCacheServer } from "@/shared/lib/queryCacheServer";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "SummitX",
};

const GEO_DATA_LIST_QUERY = "geoDataListQuery";
export default async function Page({
    params: { lang, slug },
}: {
    params: { lang: string; slug: string };
}) {
    /*
     * Decode the `slug` parameter from the URL to correctly handle Cyrillic and other special characters;
     */
    const decodedSlug = decodeURIComponent(slug);

    const language = langGuard(lang);

    const list = await queryCacheServer([GEO_DATA_LIST_QUERY, decodedSlug], () =>
        getListGeoDataLoggedMethod(decodedSlug, language ?? "ru").catch((error: unknown) =>
            isAxiosCustomError(error),
        ),
    );

    return (
        <>
            <GeoDataList geoData={list} />
        </>
    );
}
