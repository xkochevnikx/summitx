import { api } from "@/shared/api";
import { loggedMethod } from "@/shared/lib/logger";

export const getRangesLoggedMethod = loggedMethod({
    msg: "Fetching region",
    logArgs: (id: number, locale_lang: string) => ({ id, locale_lang }),
    logRes: (res: any) => ({ res }),
})((id: number, locale_lang: string) => api.mountainRange(id, { locale_lang }));
