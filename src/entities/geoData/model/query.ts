import { api } from "@/shared/api";

export const geoDataListQuery = async (search: string) => {
    try {
        return await api.objectList({
            q: search,
        });
    } catch (error) {
        console.error("🚀 Error fetching geoDataListQuery :", error);
    }
};
