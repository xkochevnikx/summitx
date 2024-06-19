import { getRangesList } from "@/entities/mountainRanges";
import { OrganizedRegions } from "./types";
import { GeodataMountainRangeResponse } from "@/shared/api/generated";

export const organizeRanges = async (): Promise<OrganizedRegions> => {
    const { topList, secondList } = getRangesList();

    const topRegions: GeodataMountainRangeResponse[] = await topList();

    const topRegionIds: number[] = topRegions.map((region) => region.id);

    const childRegions: GeodataMountainRangeResponse[] = await secondList({
        parent_id: topRegionIds,
    });

    const organized: OrganizedRegions = topRegions.reduce((acc, region) => {
        acc[region.id] = {
            ...region,
            children: childRegions.filter((child) => child.parent_id === region.id),
        };
        return acc;
    }, {} as OrganizedRegions);

    return organized;
};
