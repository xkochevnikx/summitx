import { useQuery } from "@tanstack/react-query";

import { geoDataListQuery } from "@/entities/geoData";
import { api } from "@/shared/api";

export function useGeoDataList(search: string): api.GeodataResponse[] {
    const { data: geoData } = useQuery({
        ...geoDataListQuery(search),
        initialData: [],
    });

    return geoData;
}
