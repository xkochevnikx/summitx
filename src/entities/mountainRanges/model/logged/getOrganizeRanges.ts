import { loggedMethod } from "@/shared/lib/logger/logger";

import { getRangesListService } from "../services/getRangesList";

/**
 * Логирование получения списка топовых регионов.
 *
 * @param {Object} args - Аргументы запроса.
 * @param {number[]} args.parent_id - Массив ID родительских объектов.
 * @param {string} args.locale_lang - Язык запроса.
 * @returns {Promise<any>} - Промис с результатом и логированием.
 */
export const getTopListLoggedMethod = loggedMethod({
    msg: "Получение списка топовых регионов",
    logArgs: (args: { parent_id: number[]; locale_lang: string }) => args,
    logRes: (res: any) => ({ res }),
})(getRangesListService);

/**
 * Логирование получения списка дочерних регионов.
 *
 * @param {Object} args - Аргументы запроса.
 * @param {number[]} args.parent_id - Массив ID родительских объектов.
 * @param {string} args.locale_lang - Язык запроса.
 * @returns {Promise<any>} - Промис с результатом и логированием.
 */
export const getSecondListLoggedMethod = loggedMethod({
    msg: "Получение списка дочерних регионов",
    logArgs: (args: { parent_id: number[]; locale_lang: string }) => args,
    logRes: (res: any) => ({ res }),
})(getRangesListService);
