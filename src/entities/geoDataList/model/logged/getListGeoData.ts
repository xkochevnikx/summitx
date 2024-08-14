import { loggedMethod } from "@/shared/lib/logger";

import { getGeoDataService } from "../service/getGeoData";

export const getListGeoDataLoggedMethod = loggedMethod({
    msg: "Fetching geoData list",
    logArgs: (q: string, locale_lang: string) => ({ q, locale_lang }),
    logRes: (res: any) => ({ res }),
})((q: string, locale_lang: string) => getGeoDataService({ q, locale_lang }));
