import { getSecondListLoggedMethod, getTopListLoggedMethod } from "@/entities/mountainRanges";

import type { OrganizedRegions } from "../types";

export const organizeRanges = async ({ lang }: { lang: string }): Promise<OrganizedRegions> => {
    const topRegions = await getTopListLoggedMethod({
        parent_id: [],
        locale_lang: lang,
    });

    if (topRegions?.length) {
        const topRegionIds = topRegions.map((region) => region.id);
        const childRegions = await getSecondListLoggedMethod({
            parent_id: topRegionIds,
            locale_lang: lang,
        });

        if (childRegions?.length) {
            const organized = topRegions.reduce((acc, region) => {
                acc[region.id] = {
                    ...region,
                    //@ts-expect-error The 'children' property is not defined in the OrganizedRegions type, but it is added dynamically here.
                    children: childRegions?.filter((child) => child.parent_id === region.id),
                };
                return acc;
            }, {} as OrganizedRegions);
            return organized;
        }
    }
    return {};
};
