import { api } from "@/shared/api";

export type GeoDataStore = {
    geoData: api.GeodataApiApiResponseTypesGeodataObjectResponse[];
    isLoading: boolean | null;
    setGeoData: (search: string) => void;
};
