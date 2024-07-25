"use client";
import { FC } from "react";

import { useGeoData } from "../model/store";

export const GeoDataList: FC = () => {
    const { geoData, isLoading } = useGeoData();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <ul>
            {geoData.map((item) => (
                <li key={item.id}>{item.object_name}</li>
            ))}
        </ul>
    );
};
