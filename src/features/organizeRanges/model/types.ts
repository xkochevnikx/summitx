import { GeodataMountainRangeResponse } from "@/shared/api/generated";

export interface OrganizedMountainRange extends GeodataMountainRangeResponse {
    children: GeodataMountainRangeResponse[];
}

export interface OrganizedRegions {
    [key: number]: OrganizedMountainRange;
}
