import { getRangesLoggedMethod } from "@/features/organizeRanges";
import { isAxiosCustomError } from "@/shared/lib/errors";
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
    params: { lang: string; id: number };
}) {
    console.log("🚀 ~ id:", id);
    const language = langGuard(lang);

    const region = await queryCacheFetch.fetch([GET_REGION_QUERY, lang], () =>
        getRangesLoggedMethod(Number(id), language ?? "ru").catch((error: unknown) =>
            isAxiosCustomError(error),
        ),
    );

    return (
        <>
            {region?.object_name}
            <div>{JSON.stringify(region)}</div>
        </>
    );
}
