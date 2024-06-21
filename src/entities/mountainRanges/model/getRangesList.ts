import { api } from "@/shared/api";
import { AxiosError } from "axios";

export type GetRangesModel = {
    topList: () => Promise<void | api.GeodataMountainRangeResponse[]>;
    secondList: ({
        parent_id,
    }: {
        parent_id: number[];
    }) => Promise<void | api.GeodataMountainRangeResponse[]>;
};

export const getRangesList = (): GetRangesModel => ({
    topList: async () => {
        return await api
            .mountainRangesList({
                filter: JSON.stringify({ parent_id: [] }),
            })
            .catch((error: AxiosError) =>
                console.error("🚀 Error fetching top list of mountain ranges :", error.message),
            );
    },
    secondList: async ({ parent_id }: { parent_id: number[] }) => {
        return await api
            .mountainRangesList({ filter: JSON.stringify({ parent_id }) })
            .catch((error: AxiosError) =>
                console.error("🚀 Error fetching second list of mountain ranges :", error.message),
            );
    },
});
