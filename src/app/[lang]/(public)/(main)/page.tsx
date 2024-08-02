import { Suspense } from "react";

import { organizeRanges, RegionsList } from "@/features/organizeRanges";
import { langGuard } from "@/shared/lib/languageGuard";
import { queryCacheFetch } from "@/shared/lib/queryCacheFetch";

import cls from "./page.module.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "",
    description: "",
};

const GET_REGIONS_QUERY = "getRegionsQuery";

export default async function Page({ params: { lang } }: { params: { lang: string } }) {
    const language = langGuard(lang);

    const regions = await queryCacheFetch.fetch([GET_REGIONS_QUERY, lang], () =>
        organizeRanges({ lang: language ?? "ru" }),
    );

    return (
        <div className={cls.container}>
            <Suspense fallback={<div>Loading...</div>}>
                <RegionsList regions={regions} />
            </Suspense>
        </div>
    );
}
