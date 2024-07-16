import { Suspense } from "react";

import { getRegionsQuery, organizeRanges, RegionsList } from "@/features/organizeRanges";
import { LANGUAGES } from "@/shared/constants/languages";
import { queryClient } from "@/shared/lib/query";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "",
    description: "",
};

export default async function Page({ params: { lang } }: { params: { lang: string } }) {
    const language = LANGUAGES.find((l) => l === lang);

    const regions = await queryClient.fetchQuery(
        getRegionsQuery({
            organizeRanges,
            lang: language ?? "ru",
        }),
    );

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RegionsList regions={regions} />
        </Suspense>
    );
}
