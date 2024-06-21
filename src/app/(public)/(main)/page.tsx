import type { Metadata } from "next";
import { RegionsList } from "./regionsList";
import { Suspense } from "react";

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
