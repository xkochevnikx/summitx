import { UpdateLang } from "@/features/i18n/";
// import { UpdateTheme } from "@/features/theme";
import { UiHeader } from "@/shared/ui/header";

export function OpenLayout({ children }: { children?: React.ReactNode }) {
    return (
        <>
            <UiHeader
                links={<div>links links</div>}
                right={
                    <div>
                        <UpdateLang />
                        {/* <UpdateTheme /> */}
                    </div>
                }
            />
            <main>{children}</main>
        </>
    );
}
