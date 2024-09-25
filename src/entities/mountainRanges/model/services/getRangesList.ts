"use server";
import { z } from "zod";

import { RangesListSchema } from "../domain/schema";
import { getRangesList } from "../repositories/queries";

const propsSchema = z.object({
    locale_lang: z.string(),
    parent_id: z.array(z.number()).optional(),
});

/**
 * Сервис для получения списка горных хребтов по родительскому ID и языку.
 *
 * @param {Object} props - Параметры запроса.
 * @param {string} props.locale_lang - Язык запроса.
 * @param {number[]} [props.parent_id] - Массив ID родительских объектов.
 * @returns {Promise<any>} - Промис с проверенным результатом списка хребтов.
 */
export const getRangesListService = async (props: z.infer<typeof propsSchema>) => {
    const { locale_lang, parent_id } = propsSchema.parse(props);
    const rangesList = await getRangesList({ lang: locale_lang, parent_id });
    return await RangesListSchema.parseAsync(rangesList);
};
