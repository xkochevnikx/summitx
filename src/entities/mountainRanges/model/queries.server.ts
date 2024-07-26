import { AxiosError } from "axios";

import { api } from "@/shared/api";

export type GetRangesModel = {
    topList: (lang: string) => Promise<api.GeodataMountainRangeResponse[]>;
    secondList: ({
        parent_id,
        lang,
    }: {
        parent_id: number[];
        lang: string;
    }) => Promise<api.GeodataMountainRangeResponse[]>;
    rangesItem: ({
        id,
        lang,
    }: {
        id: number;
        lang: string;
    }) => Promise<api.GeodataMountainRangeResponse>;
};

export const getRangesList = (): GetRangesModel => ({
    topList: async (lang: string) => {
        return (
            (await api
                .mountainRangesList({
                    filter: JSON.stringify({ parent_id: [] }),
                    locale_lang: lang,
                })
                .catch((error: AxiosError) =>
                    console.error("🚀 Error fetching top list of mountain ranges :", error.message),
                )) ?? []
        );
    },
    secondList: async ({ parent_id, lang }: { parent_id: number[]; lang: string }) => {
        return (
            (await api
                .mountainRangesList({ filter: JSON.stringify({ parent_id }), locale_lang: lang })
                .catch((error: AxiosError) =>
                    console.error(
                        "🚀 Error fetching second list of mountain ranges :",
                        error.message,
                    ),
                )) ?? []
        );
    },
    rangesItem: async ({ id, lang }: { id: number; lang: string }) => {
        return (
            (await api
                .mountainRange(id, { locale_lang: lang })
                .catch((error: AxiosError) =>
                    console.error(
                        "🚀 Error fetching ranges item of mountain ranges :",
                        error.message,
                    ),
                )) ?? ({} as api.GeodataMountainRangeResponse)
        );
    },
});
