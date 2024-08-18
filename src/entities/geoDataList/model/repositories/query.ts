import { api } from "@/shared/api";
import { isAxiosCustomError } from "@/shared/lib/errors";

export const getGeoDataList = async (q: string, lang: string) => {
    return await api
        .objectList({ q, locale_lang: lang })
        .catch((error: unknown) => isAxiosCustomError(error));
};
