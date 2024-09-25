import { api } from "@/shared/api";
import { isAxiosCustomError } from "@/shared/lib/errors";

/**
 * Получает список геоданных на основе запроса и языка.
 *
 * @param {string} q - Поисковый запрос для геоданных.
 * @param {string} lang - Локальный язык для геоданных.
 * @returns {Promise<any>} - Промис, который возвращает геоданные или обрабатывает ошибку Axios.
 */

export const getGeoDataList = async (q: string, lang: string) => {
    return await api
        .objectList({ q, locale_lang: lang })
        .catch((error: unknown) => isAxiosCustomError(error));
};
