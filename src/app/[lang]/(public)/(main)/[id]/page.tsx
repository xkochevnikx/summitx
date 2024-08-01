import { getRangesItem } from "@/features/organizeRanges";
import { langGuard } from "@/shared/lib/languageGuard";
import { queryCacheFetch } from "@/shared/lib/queryCacheFetch";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "",
    description: "",
};

const GET_REGION_QUERY = "getRegionQuery";

export default async function Page({
    params: { lang, id },
}: {
    params: { lang: string; id: string };
}) {
    const language = langGuard(lang);

    const region = await queryCacheFetch.fetch([GET_REGION_QUERY, lang], () =>
        getRangesItem({ id: Number(id), lang: language ?? "ru" }),
    );

    return (
        <>
            {region?.object_name}
            <div>{JSON.stringify(region)}</div>
        </>
    );
}
