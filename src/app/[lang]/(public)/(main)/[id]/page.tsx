import { getRangesList } from "@/entities/mountainRanges";
import { langGuard } from "@/shared/lib/languageGuard";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "",
    description: "",
};

export default async function Page({
    params: { lang, id },
}: {
    params: { lang: string; id: string };
}) {
    const language = langGuard(lang);
    const { rangesItem } = getRangesList();
    const region = await rangesItem({ id: Number(id), lang: language ?? "ru" });

    return (
        <>
            {region.object_name}
            <div>{JSON.stringify(region)}</div>
        </>
    );
}
