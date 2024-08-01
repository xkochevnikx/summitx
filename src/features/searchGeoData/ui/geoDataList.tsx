"use client";
import { FC } from "react";

import { useGeoData } from "../model/store";

export const GeoDataList: FC = () => {
    const { geoData, isLoading } = useGeoData();

    if (isLoading) {
        return <div>Loading...</div>;
    }

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
