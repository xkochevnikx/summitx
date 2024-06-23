import {
    OrganizedMountainRange,
    OrganizedRegions,
    organizeRanges,
} from "@/features/organizeRanges";

import type { FC } from "react";

export const RegionsList: FC = async () => {
    const regions: OrganizedRegions = await organizeRanges();

    return (
        <div>
            <h1>Regions</h1>
            <h2>testing deploy 2</h2>
            {Object.values(regions).map((region: OrganizedMountainRange) => (
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
