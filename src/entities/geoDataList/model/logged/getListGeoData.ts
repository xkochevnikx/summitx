import { loggedMethod } from "@/shared/lib/logger/logger";

import { getGeoDataService } from "../service/getGeoData";

/**
 * Логирует запрос и результат получения списка геоданных.
 *
 * @param {string} q - Поисковый запрос для геоданных.
 * @param {string} locale_lang - Локальный язык для геоданных.
 * @returns {Promise<any>} - Промис с результатом запроса геоданных.
 */
export const getListGeoDataLoggedMethod = loggedMethod({
    msg: "Запрос списка геоданных",
    logArgs: (q: string, locale_lang: string) => ({ q, locale_lang }),
    logRes: (res: any) => ({ res }),
})((q: string, locale_lang: string) => getGeoDataService({ q, locale_lang }));
