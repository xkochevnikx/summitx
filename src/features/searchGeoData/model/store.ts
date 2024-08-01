import { create } from "zustand";

import { geoDataListQuery } from "@/entities/geoData";

import { GeoDataStore } from "./types";

export const useGeoData = create<GeoDataStore>((set) => ({
    isLoading: false,
    geoData: [],
    setGeoData: async (search: string) => {
        set({ isLoading: true });
        const data = await geoDataListQuery(search);
        set({ geoData: data ?? [], isLoading: false });
    },
}));
