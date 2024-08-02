import { GeoDataList } from "@/features/searchGeoData";
import { api } from "@/shared/api";
import { isAxiosCustomError } from "@/shared/lib/errors";
import { langGuard } from "@/shared/lib/languageGuard";
import { queryCacheFetch } from "@/shared/lib/queryCacheFetch";

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

    const list = await queryCacheFetch.fetch([GEO_DATA_LIST_QUERY, decodedSlug], () =>
        api.objectList({ locale_lang: language, q: decodedSlug }).catch((error: unknown) => {
            isAxiosCustomError(error);
            return [];
        }),
    );

    return (
        <>
            <GeoDataList geoData={list} />
        </>
    );
}
