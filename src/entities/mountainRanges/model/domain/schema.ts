import { z } from "zod";

import * as Schemas from "@/shared/lib/schemasShared";

// Основная схема для GeodataApiApiResponseTypesGeodataMountainRangeResponse
export const RangesItemSchema = z.object({
    id: z.number(),
    parent_id: z.number().nullable(),
    object_name: z.string().nullable(),
    alternative_names: z.array(Schemas.LocaleApiLocaleGeoNameSchema).optional(),
    description: Schemas.LocaleApiLocaleLocalizedStringSchema.nullable(),
    area: Schemas.LocaleApiQuantitiesAreaSchema.nullable(),
    area_statistics: Schemas.GeodataApiApiResponseTypesGeodataAreaStatisticsSchema.nullable(),
});

// Схема для GeodataApiApiResponseTypesGeodataMountainRangeResponse
export const RangesListSchema = z.array(RangesItemSchema).nullable();
