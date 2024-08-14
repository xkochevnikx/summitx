"use server";
import { z } from "zod";

import { api } from "@/shared/api";

const propsSchema = z.object({
    locale_lang: z.string(),
    q: z.string(),
});

export const getGeoDataService = async (props: z.infer<typeof propsSchema>) => {
    const { locale_lang, q } = propsSchema.parse(props);

    return await api.objectList({ q, locale_lang });
};
