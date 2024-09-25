import { loggedMethod } from "@/shared/lib/logger/logger";

import { getRangesItemService } from "../services/getRangesItem";

/**
 * Логирование получения одного элемента горного хребта.
 *
 * @param {number} id - ID горного хребта.
 * @param {string} locale_lang - Язык запроса.
 * @returns {Promise<any>} - Промис с результатом и логированием.
 */
export const getRangesLoggedMethod = loggedMethod({
    msg: "Получение данных о регионе",
    logArgs: (id: number, locale_lang: string) => ({ id, locale_lang }),
    logRes: (res: any) => ({ res }),
})((id: number, locale_lang: string) => getRangesItemService({ id, locale_lang }));
