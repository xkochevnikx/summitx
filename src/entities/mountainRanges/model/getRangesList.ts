import { GeodataMountainRangeResponse } from "@/shared/api/generated";
import { api } from "@/shared/api";

export type GetRangesModel = {
    topList: () => Promise<GeodataMountainRangeResponse[]>;
    secondList: ({ parent_id }: { parent_id: number[] }) => Promise<GeodataMountainRangeResponse[]>;
};

export const getRangesList = (): GetRangesModel => ({
    topList: async () => {
        return await api.mountainRangesList({
            filter: JSON.stringify({ parent_id: [] }),
        });
    },
    secondList: async ({ parent_id }: { parent_id: number[] }) =>
        await api.mountainRangesList({ filter: JSON.stringify({ parent_id }) }),
});
