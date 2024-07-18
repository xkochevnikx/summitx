import { create } from "zustand";

import { geoDataListQuery } from "@/entities/geoData";

import { GeoDataStore } from "./types";

export const useGeoData = create<GeoDataStore>((set, _) => ({
    isLoading: null,
    geoData: [],
    setGeoData: async (search: string) => {
        set({ isLoading: true });
        set({ geoData: await geoDataListQuery(search) });
        set({ isLoading: false });
    },
}));
