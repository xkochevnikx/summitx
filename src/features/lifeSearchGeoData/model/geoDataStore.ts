import { create } from "zustand";

import { geoDataListQuery } from "@/entities/geoData";
import { api } from "@/shared/api";

type GeoDataStore = {
    geoData: api.GeodataResponse[];
    isLoading: boolean;
    setGeoData: (search: string) => void;
};

export const useGeoData = create<GeoDataStore>((set, _) => ({
    isLoading: true,
    geoData: [],
    setGeoData: async (search: string) => {
        set({ geoData: await geoDataListQuery(search), isLoading: false });
    },
}));
