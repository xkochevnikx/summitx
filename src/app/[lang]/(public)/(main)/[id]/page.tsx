import { getRangesLoggedMethod as getRangesItemMethod } from "@/features/organizeRanges";
import { isAxiosCustomError } from "@/shared/lib/errors";
import { langGuard } from "@/shared/lib/languageGuard";
import { queryCacheServer } from "@/shared/lib/queryCacheServer";

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

    const regions = await queryCacheServer([GET_REGION_QUERY, lang], () =>
        getRangesItemMethod(Number(id), language ?? "ru").catch((error: unknown) =>
            isAxiosCustomError(error),
        ),
    );

    return (
        <>
            {regions?.object_name}
            <div>{JSON.stringify(regions)}</div>
        </>
    );
}
