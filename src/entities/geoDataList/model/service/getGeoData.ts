"use server";
import { z } from "zod";

import { GeoDataSchema } from "../domain/schema";
import { getGeoDataList } from "../repositories/query";

const propsSchema = z.object({
    locale_lang: z.string(),
    q: z.string(),
});

export const getGeoDataService = async (props: z.infer<typeof propsSchema>) => {
    const { locale_lang, q } = propsSchema.parse(props);

    const result = await getGeoDataList(q, locale_lang);

    return GeoDataSchema.parseAsync(result);
};
