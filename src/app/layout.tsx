import { OpenLayout } from "./_/layouts/OpenLayout";
import { AppProvider } from "./_/providers/app-provider";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "SummitX",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <AppProvider>
                    <OpenLayout>{children}</OpenLayout>
                </AppProvider>
            </body>
        </html>
    );
}
