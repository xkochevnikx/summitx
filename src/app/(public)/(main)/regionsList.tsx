import { OrganizedMountainRange, OrganizedRegions } from "@/features/organizeRanges";
import type { FC } from "react";

type RegionsListProps = {
    regions: OrganizedRegions;
};

export const RegionsList: FC<RegionsListProps> = ({ regions }) => {
    return (
        <div>
            <h1>Regions</h1>
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
