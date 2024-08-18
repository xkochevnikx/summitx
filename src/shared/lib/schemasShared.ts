import { z } from "zod";

// Схема для объекта LocaleApiLocaleLocalizedString
export const LocaleApiLocaleLocalizedStringSchema = z.object({
    lang: z.string(),
    value: z.string(),
});

// Схема для LocaleApiLocaleGeoNameValue
export const LocaleApiLocaleGeoNameValueSchema = z.union([
    z.string().optional(),
    z
        .object({
            LocalString: LocaleApiLocaleLocalizedStringSchema,
        })
        .optional(),
    z
        .object({
            String: z.string(),
        })
        .optional(),
]);

// Схема для объекта LocaleApiLocaleGeoName
export const LocaleApiLocaleGeoNameSchema = z.object({
    kind: z.enum(["Main", "Old", "Alt", "International", "Local", "National", "Official"]),
    value: LocaleApiLocaleGeoNameValueSchema,
});

// Схема для объекта LocaleApiQuantitiesArea
export const LocaleApiQuantitiesAreaSchema = z.object({
    amount: z.number(),
    string: z.string(),
    unit: z.string(),
});

// Схема для объекта GeodataApiApiResponseTypesGeodataAreaStatistics
export const GeodataApiApiResponseTypesGeodataAreaStatisticsSchema = z.object({
    glaciers_area: LocaleApiQuantitiesAreaSchema,
    glaciers_count: z.number(),
    mountain_passes_count: z.number(),
    mountains_count: z.number(),
});

// Схема для объекта LocaleApiQuantitiesLength
export const LocaleApiQuantitiesLengthSchema = z.object({
    amount: z.number(),
    string: z.string(),
    unit: z.string(),
});

// Схема для объекта GeodataApiApiResponseTypesGeodataCountryRegionResponse
export const CountryRegionResponseSchema = z.object({
    id: z.number(),
    parent_id: z.number().nullable(),
    object_name: z.string().nullable(),
    alternative_names: z.array(LocaleApiLocaleGeoNameSchema).optional(),
    description: LocaleApiLocaleLocalizedStringSchema.nullable(),
    area: LocaleApiQuantitiesAreaSchema.nullable(),
    area_statistics: GeodataApiApiResponseTypesGeodataAreaStatisticsSchema.nullable(),
});

export const MountainRangeResponseSchema = z.object({
    id: z.number(),
    parent_id: z.number().nullable(),
    object_name: z.string().nullable(),
    alternative_names: z.array(LocaleApiLocaleGeoNameSchema).optional(),
    description: LocaleApiLocaleLocalizedStringSchema.nullable(),
    area: LocaleApiQuantitiesAreaSchema.nullable(),
    area_statistics: GeodataApiApiResponseTypesGeodataAreaStatisticsSchema.nullable(),
});

// Подсхемы для объектов
export const VolcanoSchema = z.object({
    status: z.enum(["Active", "Dormant", "Extinct"]).nullable().optional(),
    volcano_type: z.enum(["Stratovolcano", "Shield", "Scoria"]).nullable().optional(),
});

export const MountainPassScaleSchema = z.object({
    max: z.string(),
    min: z.string(),
});
