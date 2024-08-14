"use server";
import { z } from "zod";

import { RangesItemSchema } from "../domain/schema";
import { getRangesItem } from "../repositories/queries";

const propsSchema = z.object({
    locale_lang: z.string(),
    id: z.number(),
});

export const getRangesItemService = async (props: z.infer<typeof propsSchema>) => {
    const { locale_lang, id } = propsSchema.parse(props);
    const rangesItem = await getRangesItem(id, locale_lang);
    return await RangesItemSchema.parseAsync(rangesItem);
};
