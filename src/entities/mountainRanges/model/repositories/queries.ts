import { api } from "@/shared/api";
import { isAxiosCustomError } from "@/shared/lib/errors";

export const getRangesList = async ({
    parent_id = [],
    lang = "ru",
}: {
    parent_id?: number[];
    lang: string;
}) => {
    return await api
        .mountainRangesList({
            filter: JSON.stringify({ parent_id }),
            locale_lang: lang,
        })
        .catch((error: unknown) => {
            throw error;
        });
};

export const getRangesItem = async (id: number, lang: string) => {
    return await api
        .mountainRange(id, { locale_lang: lang })
        .catch((error: unknown) => isAxiosCustomError(error));
};
