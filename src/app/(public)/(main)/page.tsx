import { Suspense } from "react";

import { RegionsList } from "./regionsList";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "",
    description: "",
};

export default async function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RegionsList />
        </Suspense>
    );
}
