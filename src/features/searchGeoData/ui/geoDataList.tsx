"use client";
import { FC } from "react";
import { z } from "zod";

import { GeoDataSchema } from "@/entities/geoDataList";

type GeoDataListProps = {
    geoData: z.infer<typeof GeoDataSchema> | void;
};

export const GeoDataList: FC<GeoDataListProps> = ({ geoData }) => {
    const mappedData = geoData
        ?.map((data) => {
            if (!data) return null;
            const [[key, value]] = Object.entries(data); // [['key', 'value']]
            return [key, value];
        })
        ?.filter((item): item is [string, any] => Boolean(item));

    return (
        <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {mappedData?.map(([key, value]) => <div key={key}>{JSON.stringify(value)}</div>)}
        </ul>
    );
};
