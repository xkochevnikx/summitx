import { organizeRanges, OrganizedRegions } from "@/features/organizeRanges";
import type { Metadata } from "next";
import { RegionsList } from "./regionsList";

export const metadata: Metadata = {
    title: "",
    description: "",
};

export default async function Page() {
    const regions: OrganizedRegions = await organizeRanges();
    return <RegionsList regions={regions} />;
}
