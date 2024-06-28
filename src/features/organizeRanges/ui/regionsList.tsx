"use client";
import { type FC } from "react";

import { useI18n } from "../i18n";
import { OrganizedMountainRange, OrganizedRegions } from "../model/types";

type RegionsListProps = {
    regions: OrganizedRegions;
};

export const RegionsList: FC<RegionsListProps> = ({ regions }) => {
    const { t } = useI18n();
    return (
        <div>
            <h1>{t("title")}</h1>
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
