import Link from "next/link";

import { UpdateLang } from "@/features/i18n/";
import { UiHeader } from "@/shared/ui/header";

export function OpenLayout({ children }: { children?: React.ReactNode }) {
    return (
        <>
            <UiHeader
                links={
                    <div>
                        <Link href={`/about`}>about</Link>
                    </div>
                }
                right={
                    <div>
                        <UpdateLang />
                    </div>
                }
            />
            <main>{children}</main>
        </>
    );
}
