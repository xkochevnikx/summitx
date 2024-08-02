import { AxiosError } from "axios";

import { api } from "@/shared/api";
import { isAxiosCustomError } from "@/shared/lib/errors";

export const getRangesItem = async ({ id, lang }: { id: number; lang: string }) => {
    return await api
        .mountainRange(+id, { locale_lang: lang })
        .catch((error: AxiosError) => isAxiosCustomError(error));
};
