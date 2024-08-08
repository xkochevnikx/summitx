"use client";
import { useRouter } from "next/navigation";
import { type FC } from "react";

import { classNames } from "@/shared/lib/classNames";

import { OrganizedMountainRange, OrganizedRegions } from "../model/types";

import cls from "./regionsList.module.css";

type RegionsListProps = {
    regions: OrganizedRegions | void;
};

export const RegionsList: FC<RegionsListProps> = ({ regions }) => {
    const router = useRouter();

    const hasRegions = regions && Object.keys(regions).length > 0;

    return (
        <div className={classNames(cls.container)}>
            <div className={classNames(cls.items)}>
                {hasRegions ? (
                    Object.values(regions).map((region: OrganizedMountainRange) => (
                        <div key={region.id} className={classNames(cls.item)}>
                            <h2>{region.object_name}</h2>
                            <ul>
                                {region.children.map((child) => (
                                    <li
                                        className={cls.child}
                                        onClick={() => router.push(`/${child.id}`)}
                                        key={child.id}
                                    >
                                        {child.object_name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                ) : (
                    <h3>No regions</h3>
                )}
            </div>
        </div>
    );
};
