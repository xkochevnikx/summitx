import { z } from "zod";

import { GeoDataSchema } from "../domain/schema";
import { getGeoDataList } from "../repositories/query";

const propsSchema = z.object({
    locale_lang: z.string(),
    q: z.string(),
});

/**
 * Сервис для получения геоданных с проверкой входных параметров и схемы результата.
 *
 * @param {Object} props - Объект с параметрами запроса.
 * @param {string} props.locale_lang - Локальный язык.
 * @param {string} props.q - Поисковый запрос.
 * @returns {Promise<any>} - Промис с результатом геоданных.
 */
export const getGeoDataService = async (props: z.infer<typeof propsSchema>) => {
    const { locale_lang, q } = propsSchema.parse(props);

    const result = await getGeoDataList(q, locale_lang);

    return GeoDataSchema.parseAsync(result);
};
