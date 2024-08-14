// import { z } from "zod";

// // Схема для GeodataApiApiResponseTypesGeodataMountainResponse
// const mountainResponseSchema = z.object({
//     id: z.number(),
//     object_name: z.string().nullable(),
//     elevation: z
//         .object({
//             amount: z.number(),
//             string: z.string(),
//             unit: z.string(),
//         })
//         .nullable(),
//     alternative_names: z
//         .array(
//             z.object({
//                 kind: z.string(),
//                 value: z.union([
//                     z.string(),
//                     z.object({
//                         lang: z.string(),
//                         value: z.string(),
//                     }),
//                 ]),
//             }),
//         )
//         .optional(),
//     description: z
//         .object({
//             lang: z.string(),
//             value: z.string(),
//         })
//         .nullable(),
//     parent_country_region: z
//         .object({
//             id: z.number(),
//             object_name: z.string().nullable(),
//         })
//         .nullable(),
//     parent_mountain_range: z
//         .object({
//             id: z.number(),
//             object_name: z.string().nullable(),
//         })
//         .nullable(),
//     prominence: z
//         .object({
//             amount: z.number(),
//             string: z.string(),
//             unit: z.string(),
//         })
//         .nullable(),
//     volcano: z
//         .object({
//             status: z.string().nullable(),
//             volcano_type: z.string().nullable(),
//         })
//         .nullable(),
// });

// // Схема для GeodataApiApiResponseTypesGeodataMountainRangeResponse
// const mountainRangeResponseSchema = z.object({
//     id: z.number(),
//     object_name: z.string().nullable(),
//     area: z
//         .object({
//             amount: z.number(),
//             string: z.string(),
//             unit: z.string(),
//         })
//         .nullable(),
//     area_statistics: z
//         .object({
//             glaciers_area: z.object({
//                 amount: z.number(),
//                 string: z.string(),
//                 unit: z.string(),
//             }),
//             glaciers_count: z.number(),
//             mountain_passes_count: z.number(),
//             mountains_count: z.number(),
//         })
//         .nullable(),
//     alternative_names: z
//         .array(
//             z.object({
//                 kind: z.string(),
//                 value: z.union([
//                     z.string(),
//                     z.object({
//                         lang: z.string(),
//                         value: z.string(),
//                     }),
//                 ]),
//             }),
//         )
//         .optional(),
//     description: z
//         .object({
//             lang: z.string(),
//             value: z.string(),
//         })
//         .nullable(),
//     parent_id: z.number().nullable(),
// });

// // Схема для GeodataApiApiResponseTypesGeodataMountainPassResponse
// const mountainPassResponseSchema = z.object({
//     id: z.number(),
//     object_name: z.string().nullable(),
//     scale: z
//         .object({
//             max: z.string(),
//             min: z.string(),
//         })
//         .nullable(),
//     alternative_names: z
//         .array(
//             z.object({
//                 kind: z.string(),
//                 value: z.union([
//                     z.string(),
//                     z.object({
//                         lang: z.string(),
//                         value: z.string(),
//                     }),
//                 ]),
//             }),
//         )
//         .optional(),
//     description: z
//         .object({
//             lang: z.string(),
//             value: z.string(),
//         })
//         .nullable(),
//     elevation: z
//         .object({
//             amount: z.number(),
//             string: z.string(),
//             unit: z.string(),
//         })
//         .nullable(),
//     parent_country_region: z
//         .object({
//             id: z.number(),
//             object_name: z.string().nullable(),
//         })
//         .nullable(),
//     parent_mountain_range: z
//         .object({
//             id: z.number(),
//             object_name: z.string().nullable(),
//         })
//         .nullable(),
// });

// // Схема для GeodataApiApiResponseTypesGeodataGlacierResponse
// const glacierResponseSchema = z.object({
//     id: z.number(),
//     object_name: z.string().nullable(),
//     area: z
//         .object({
//             amount: z.number(),
//             string: z.string(),
//             unit: z.string(),
//         })
//         .nullable(),
//     area_statistics: z
//         .object({
//             glaciers_area: z.object({
//                 amount: z.number(),
//                 string: z.string(),
//                 unit: z.string(),
//             }),
//             glaciers_count: z.number(),
//             mountain_passes_count: z.number(),
//             mountains_count: z.number(),
//         })
//         .nullable(),
//     alternative_names: z
//         .array(
//             z.object({
//                 kind: z.string(),
//                 value: z.union([
//                     z.string(),
//                     z.object({
//                         lang: z.string(),
//                         value: z.string(),
//                     }),
//                 ]),
//             }),
//         )
//         .optional(),
//     description: z
//         .object({
//             lang: z.string(),
//             value: z.string(),
//         })
//         .nullable(),
//     parent_id: z.number().nullable(),
//     parent_country_region: z
//         .object({
//             id: z.number(),
//             object_name: z.string().nullable(),
//         })
//         .nullable(),
//     parent_mountain_range: z
//         .object({
//             id: z.number(),
//             object_name: z.string().nullable(),
//         })
//         .nullable(),
// });

// // Схема для GeodataApiApiResponseTypesGeodataCountryResponse
// const countryResponseSchema = z.object({
//     id: z.number(),
//     object_name: z.string().nullable(),
//     area: z
//         .object({
//             amount: z.number(),
//             string: z.string(),
//             unit: z.string(),
//         })
//         .nullable(),
//     area_statistics: z
//         .object({
//             glaciers_area: z.object({
//                 amount: z.number(),
//                 string: z.string(),
//                 unit: z.string(),
//             }),
//             glaciers_count: z.number(),
//             mountain_passes_count: z.number(),
//             mountains_count: z.number(),
//         })
//         .nullable(),
//     alternative_names: z
//         .array(
//             z.object({
//                 kind: z.string(),
//                 value: z.union([
//                     z.string(),
//                     z.object({
//                         lang: z.string(),
//                         value: z.string(),
//                     }),
//                 ]),
//             }),
//         )
//         .optional(),
//     description: z
//         .object({
//             lang: z.string(),
//             value: z.string(),
//         })
//         .nullable(),
//     parent_id: z.number().nullable(),
// });

// // Схема для GeodataApiApiResponseTypesGeodataCountryRegionResponse
// const countryRegionResponseSchema = z.object({
//     id: z.number(),
//     object_name: z.string().nullable(),
//     area: z
//         .object({
//             amount: z.number(),
//             string: z.string(),
//             unit: z.string(),
//         })
//         .nullable(),
//     area_statistics: z
//         .object({
//             glaciers_area: z.object({
//                 amount: z.number(),
//                 string: z.string(),
//                 unit: z.string(),
//             }),
//             glaciers_count: z.number(),
//             mountain_passes_count: z.number(),
//             mountains_count: z.number(),
//         })
//         .nullable(),
//     alternative_names: z
//         .array(
//             z.object({
//                 kind: z.string(),
//                 value: z.union([
//                     z.string(),
//                     z.object({
//                         lang: z.string(),
//                         value: z.string(),
//                     }),
//                 ]),
//             }),
//         )
//         .optional(),
//     description: z
//         .object({
//             lang: z.string(),
//             value: z.string(),
//         })
//         .nullable(),
//     parent_id: z.number().nullable(),
// });

// const geodataResponseSchema = z.union([
//     z.object({ Mountain: mountainResponseSchema }),
//     z.object({ MountainRange: mountainRangeResponseSchema }),
//     z.object({ MountainPass: mountainPassResponseSchema }),
//     z.object({ Glacier: glacierResponseSchema }),
//     z.object({ Country: countryResponseSchema }),
//     z.object({ CountryRegion: countryRegionResponseSchema }),
// ]);

// export const geoDataArraySchema = z.array(geodataResponseSchema);
