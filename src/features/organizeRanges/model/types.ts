import { api } from "@/shared/api";

export interface OrganizedMountainRange extends api.GeodataMountainRangeResponse {
    children: api.GeodataMountainRangeResponse[];
}

export interface OrganizedRegions {
    [key: number]: OrganizedMountainRange;
}
