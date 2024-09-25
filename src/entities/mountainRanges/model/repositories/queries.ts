import { api } from "@/shared/api";
import { isAxiosCustomError } from "@/shared/lib/errors";

/**
 * Получает список горных хребтов с фильтром по родительским ID и языку.
 *
 * @param {Object} params - Параметры запроса.
 * @param {number[]} [params.parent_id=[]] - Массив ID родительских объектов.
 * @param {string} params.lang - Язык запроса, по умолчанию "ru".
 * @returns {Promise<any>} - Промис с результатом списка хребтов или ошибкой.
 */
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

/**
 * Получает информацию о конкретном горном хребте по его ID и языку.
 *
 * @param {number} id - ID горного хребта.
 * @param {string} lang - Язык запроса.
 * @returns {Promise<any>} - Промис с результатом или ошибкой.
 */
export const getRangesItem = async (id: number, lang: string) => {
    return await api
        .mountainRange(id, { locale_lang: lang })
        .catch((error: unknown) => isAxiosCustomError(error));
};
