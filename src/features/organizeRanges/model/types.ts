import { api } from "@/shared/api";

export type OrganizedMountainRange = api.GeodataApiApiResponseTypesGeodataMountainRangeResponse & {
    children: api.GeodataApiApiResponseTypesGeodataMountainRangeResponse[];
};

export type OrganizedRegions = {
    [key: number]: OrganizedMountainRange;
};
