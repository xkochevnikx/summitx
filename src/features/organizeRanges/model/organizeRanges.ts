import { getRangesList } from "@/entities/mountainRanges";
import { loggedMethod } from "@/shared/lib/logger";

import type { OrganizedRegions } from "./types";

const { topList, secondList } = getRangesList();

const loggedTopList = loggedMethod({
    msg: "Fetching top regions",
    logArgs: (lang: string) => ({ lang }),
    /* eslint-disable @typescript-eslint/no-explicit-any */
    logRes: (res: any) => ({ res }),
})(topList);

export const organizeRanges = async ({ lang }: { lang: string }): Promise<OrganizedRegions> => {
    const topRegions = await loggedTopList(lang);

    if (topRegions?.length) {
        const topRegionIds = topRegions.map((region) => region.id);
        const childRegions = await secondList({
            parent_id: topRegionIds,
            lang,
        });
        if (childRegions?.length) {
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
