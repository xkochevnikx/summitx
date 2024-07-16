"use client";
import { useRouter } from "next/navigation";
import { type FC } from "react";

import { classNames } from "@/shared/lib/classNames";

import { useI18n } from "../i18n";
import { OrganizedMountainRange, OrganizedRegions } from "../model/types";

import cls from "./regionsList.module.css";

type RegionsListProps = {
    regions: OrganizedRegions;
};

export const RegionsList: FC<RegionsListProps> = ({ regions }) => {
    const router = useRouter();
    const { t } = useI18n();
    return (
        <div className={classNames(cls.container)}>
            <h1 className={classNames(cls.title)}>{t("title")}</h1>
            <div className={classNames(cls.items)}>
                {Object.values(regions).map((region: OrganizedMountainRange) => (
                    <div key={region.id} className={classNames(cls.item)}>
                        <h2>{region.object_name}</h2>
                        <ul>
                            {region.children.map((child) => (
                                <li onClick={() => router.push(`/${child.id}`)} key={child.id}>
                                    {child.object_name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};
