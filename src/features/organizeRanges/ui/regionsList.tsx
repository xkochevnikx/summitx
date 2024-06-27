"use client";
import { useEffect, useState, type FC } from "react";

import { organizeRanges } from "../model/organizeRanges.repository";
import { OrganizedMountainRange, OrganizedRegions } from "../model/types";

type RegionsListProps = {
    regions: OrganizedRegions;
    lang: string;
};

export const RegionsList: FC<RegionsListProps> = ({ regions, lang }) => {
    const [regionsList, seRegionsList] = useState(regions ?? {});

    useEffect(() => {
        (async () => {
            const regions: OrganizedRegions = await organizeRanges({ lang });
            seRegionsList(regions);
        })();
    }, [lang]);

    return (
        <div>
            <h1>Regions</h1>
            {Object.values(regionsList).map((region: OrganizedMountainRange) => (
                <div key={region.id} style={{ marginBottom: "20px" }}>
                    <h2>{region.object_name}</h2>
                    <ul>
                        {region.children.map((child) => (
                            <li key={child.id}>{child.object_name}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};
