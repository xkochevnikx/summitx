"use client";
import { FC } from "react";

import { api } from "@/shared/api";

type GeoDataListProps = {
    geoData: api.GeodataApiApiResponseTypesGeodataObjectResponse[] | void;
};

export const GeoDataList: FC<GeoDataListProps> = ({ geoData }) => {
    const mappedData = geoData?.map((data) => {
        const [key, value] = Object.entries(data)[0];
        return [key, value];
    });

    return (
        <ul>
            {mappedData?.map((data) => {
                const [key, value] = data;
                return <li key={key}>{value.object_name}</li>;
            })}
        </ul>
    );
};
