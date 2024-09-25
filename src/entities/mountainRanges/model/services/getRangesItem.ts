"use server";
import { z } from "zod";

import { RangesItemSchema } from "../domain/schema";
import { getRangesItem } from "../repositories/queries";

const propsSchema = z.object({
    locale_lang: z.string(),
    id: z.number(),
});

/**
 * Сервис для получения одного элемента горного хребта по его ID и языку.
 *
 * @param {Object} props - Параметры запроса.
 * @param {string} props.locale_lang - Язык запроса.
 * @param {number} props.id - ID горного хребта.
 * @returns {Promise<any>} - Промис с проверенным результатом.
 */
export const getRangesItemService = async (props: z.infer<typeof propsSchema>) => {
    const { locale_lang, id } = propsSchema.parse(props);
    const rangesItem = await getRangesItem(id, locale_lang);
    return await RangesItemSchema.parseAsync(rangesItem);
};
