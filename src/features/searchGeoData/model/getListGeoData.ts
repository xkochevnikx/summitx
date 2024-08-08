import { api } from "@/shared/api";
import { loggedMethod } from "@/shared/lib/logger";

export const getListGeoDataLoggedMethod = loggedMethod({
    msg: "Fetching geoData list",
    logArgs: (q: string, locale_lang: string) => ({ q, locale_lang }),
    logRes: (res: any) => ({ res }),
})((q: string, locale_lang: string) => api.objectList({ q, locale_lang }));
