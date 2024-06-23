import { getRangesList } from "@/entities/mountainRanges";

import type { OrganizedRegions } from "./types";

export const organizeRanges = async (): Promise<OrganizedRegions> => {
    const { topList, secondList } = getRangesList();

    const topRegions = await topList();

    if (topRegions) {
        const topRegionIds = topRegions.map((region) => region.id);

        const childRegions = await secondList({
            parent_id: topRegionIds,
        });
        if (childRegions) {
            const organized = topRegions.reduce((acc, region) => {
                acc[region.id] = {
                    ...region,
                    children: childRegions?.filter((child) => child.parent_id === region.id),
                };
                return acc;
            }, {} as OrganizedRegions);

            return organized;
        }
    }

    return {};
};
