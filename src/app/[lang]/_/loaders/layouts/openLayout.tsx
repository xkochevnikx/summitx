import { AppHeader } from "@/widgets/app-header";

export function OpenLayout({ children }: { children?: React.ReactNode }) {
    return (
        <>
            <AppHeader variant="public" />
            <main>{children}</main>
        </>
    );
}
