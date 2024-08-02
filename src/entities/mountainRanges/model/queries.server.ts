import { api } from "@/shared/api";
import { isAxiosCustomError } from "@/shared/lib/errors";

import { GeodataMountainRangeResponse } from "./types";

export type GetRangesModel = {
    topList: (lang: string) => Promise<void | GeodataMountainRangeResponse[]>;
    secondList: ({
        parent_id,
        lang,
    }: {
        parent_id: number[];
        lang: string;
    }) => Promise<void | GeodataMountainRangeResponse[]>;
};

export const getRangesList = (): GetRangesModel => ({
    topList: async (lang: string) => {
        return await api
            .mountainRangesList({
                filter: JSON.stringify({ parent_id: [] }),
                locale_lang: lang ?? "ru",
            })
            .catch((error: unknown) => {
                isAxiosCustomError(error);
            });
    },
    secondList: async ({ parent_id, lang }: { parent_id: number[]; lang: string }) => {
        return await api
            .mountainRangesList({ filter: JSON.stringify({ parent_id }), locale_lang: lang })
            .catch((error: unknown) => isAxiosCustomError(error));
    },
});
