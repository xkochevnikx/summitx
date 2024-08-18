import { z } from "zod";

import * as Schemas from "@/shared/lib/schemasShared";

// Схема для GeodataApiApiResponseTypesGeodataMountainResponse
export const MountainResponseSchema = z.object({
    id: z.number(),
    object_name: z.string().nullable().optional(),
    alternative_names: z.array(Schemas.LocaleApiLocaleGeoNameSchema).optional(),
    description: Schemas.LocaleApiLocaleLocalizedStringSchema.nullable().optional(),
    elevation: Schemas.LocaleApiQuantitiesLengthSchema.nullable().optional(),
    parent_country_region: Schemas.CountryRegionResponseSchema.nullable().optional(),
    parent_mountain_range: Schemas.MountainRangeResponseSchema.nullable().optional(),
    prominence: Schemas.LocaleApiQuantitiesLengthSchema.nullable().optional(),
    volcano: Schemas.VolcanoSchema.nullable().optional(),
});

// Схема для GeodataApiApiResponseTypesGeodataMountainRangeResponse
export const MountainRangeResponseSchema = z.object({
    id: z.number(),
    parent_id: z.number().nullable().optional(),
    object_name: z.string().nullable().optional(),
    alternative_names: z.array(Schemas.LocaleApiLocaleGeoNameSchema).optional(),
    description: Schemas.LocaleApiLocaleLocalizedStringSchema.nullable().optional(),
    area: Schemas.LocaleApiQuantitiesAreaSchema.nullable().optional(),
    area_statistics:
        Schemas.GeodataApiApiResponseTypesGeodataAreaStatisticsSchema.nullable().optional(),
});

// Схема для GeodataApiApiResponseTypesGeodataMountainPassResponse
export const MountainPassResponseSchema = z.object({
    id: z.number(),
    object_name: z.string().nullable().optional(),
    alternative_names: z.array(Schemas.LocaleApiLocaleGeoNameSchema).optional(),
    description: Schemas.LocaleApiLocaleLocalizedStringSchema.nullable().optional(),
    elevation: Schemas.LocaleApiQuantitiesLengthSchema.nullable().optional(),
    parent_country_region: Schemas.CountryRegionResponseSchema.nullable().optional(),
    parent_mountain_range: Schemas.MountainRangeResponseSchema.nullable().optional(),
    scale: Schemas.MountainPassScaleSchema.nullable().optional(),
});

// Схема для GeodataApiApiResponseTypesGeodataGlacierResponse
export const GlacierResponseSchema = z.object({
    id: z.number(),
    object_name: z.string().nullable().optional(),
    alternative_names: z.array(Schemas.LocaleApiLocaleGeoNameSchema).optional(),
    description: Schemas.LocaleApiLocaleLocalizedStringSchema.nullable().optional(),
    area: Schemas.LocaleApiQuantitiesAreaSchema.nullable().optional(),
    area_statistics:
        Schemas.GeodataApiApiResponseTypesGeodataAreaStatisticsSchema.nullable().optional(),
    parent_country_region: Schemas.CountryRegionResponseSchema.nullable().optional(),
    parent_mountain_range: Schemas.MountainRangeResponseSchema.nullable().optional(),
});

// Схема для GeodataApiApiResponseTypesGeodataCountryResponse
export const CountryResponseSchema = z.object({
    id: z.number(),
    object_name: z.string().nullable().optional(),
    alternative_names: z.array(Schemas.LocaleApiLocaleGeoNameSchema).optional(),
    description: z.string().nullable().optional(),
    area: Schemas.LocaleApiQuantitiesAreaSchema.nullable().optional(),
    area_statistics:
        Schemas.GeodataApiApiResponseTypesGeodataAreaStatisticsSchema.nullable().optional(),
    parent_id: z.number().nullable().optional(),
});

// Схема для GeodataApiApiResponseTypesGeodataCountryRegionResponse
export const CountryRegionResponseSchema = z.object({
    id: z.number(),
    object_name: z.string().nullable().optional(),
    alternative_names: z.array(Schemas.LocaleApiLocaleGeoNameSchema).optional(),
    description: z.string().nullable().optional(),
    area: Schemas.LocaleApiQuantitiesAreaSchema.nullable().optional(),
    area_statistics:
        Schemas.GeodataApiApiResponseTypesGeodataAreaStatisticsSchema.nullable().optional(),
    parent_id: z.number().nullable().optional(),
});

// Основная схема для GeodataApiApiResponseTypesGeodataObjectResponse
export const GeoDataSchema = z.array(
    z.union([
        z.object({ Mountain: MountainResponseSchema }).optional(),
        z.object({ MountainRange: MountainRangeResponseSchema }).optional(),
        z.object({ MountainPass: MountainPassResponseSchema }).optional(),
        z.object({ Glacier: GlacierResponseSchema }).optional(),
        z.object({ Country: CountryResponseSchema }).optional(),
        z.object({ CountryRegion: CountryRegionResponseSchema }).optional(),
    ]),
);
