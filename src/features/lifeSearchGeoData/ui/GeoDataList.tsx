"use client";
import { useGeoData } from "../model/geoDataStore";

export const GeoDataList = () => {
    const { geoData } = useGeoData();

    return (
        <ul>
            {geoData.map((item) => (
                <li key={item.id}>{item.object_name}</li>
            ))}
        </ul>
    );
};
