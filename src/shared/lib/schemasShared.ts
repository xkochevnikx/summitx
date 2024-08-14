import { z } from "zod";

// Схема для объекта LocaleApiLocaleLocalizedString
export const LocaleApiLocaleLocalizedStringSchema = z.object({
    lang: z.string(),
    value: z.string(),
});

// Схема для LocaleApiLocaleGeoNameValue
export const LocaleApiLocaleGeoNameValueSchema = z.union([
    z.string(),
    z.object({
        LocalString: LocaleApiLocaleLocalizedStringSchema,
    }),
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
