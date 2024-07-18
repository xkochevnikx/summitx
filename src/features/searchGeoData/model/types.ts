import { api } from "@/shared/api";

export type GeoDataStore = {
    geoData: api.GeodataResponse[];
    isLoading: boolean | null;
    setGeoData: (search: string) => void;
};
