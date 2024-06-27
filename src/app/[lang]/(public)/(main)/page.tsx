import Link from "next/link";
import { Suspense } from "react";

import { OrganizedRegions, RegionsList, organizeRanges } from "@/features/organizeRanges";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "",
    description: "",
};

export default async function Page({ params: { lang } }: { params: { lang: string } }) {
    const regions: OrganizedRegions = await organizeRanges({ lang });
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Link href={`/${lang}/about`}>about</Link>
            <RegionsList regions={regions} lang={lang} />
        </Suspense>
    );
}
