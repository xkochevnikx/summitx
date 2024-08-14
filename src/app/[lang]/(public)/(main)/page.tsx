import { Suspense } from "react";

import { organizeRanges, RegionsList } from "@/features/organizeRanges";
import { isAxiosCustomError } from "@/shared/lib/errors";
import { langGuard } from "@/shared/lib/languageGuard";
import { queryCacheServer } from "@/shared/lib/queryCacheServer";

import cls from "./page.module.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "",
    description: "",
};

const GET_REGIONS_QUERY = "getRegionsQuery";

export default async function Page({ params: { lang } }: { params: { lang: string } }) {
    const language = langGuard(lang);

    const regions = await queryCacheServer([GET_REGIONS_QUERY, lang], () =>
        organizeRanges({ lang: language ?? "ru" }).catch((error: unknown) =>
            isAxiosCustomError(error),
        ),
    );

    return (
        <div className={cls.container}>
            <Suspense fallback={<div>Loading...</div>}>
                <RegionsList regions={regions} />
            </Suspense>
        </div>
    );
}
