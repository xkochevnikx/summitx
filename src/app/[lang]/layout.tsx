import { getInitialTheme } from "@/features/themeSwitcher";

import { OpenLayout } from "./_/layouts/openLayout";
import { AppLoader } from "./_/loaders/app-loader";
import { AppProvider } from "./_/providers/app-provider";

import "./_/style/index.css";

export default async function RootLayout({
    children,
    params: { lang },
}: {
    children: React.ReactNode;
    params: { lang: string };
}) {
    const theme = await getInitialTheme();

    return (
        <html lang={lang}>
            <body>
                <AppLoader>
                    <AppProvider initialTheme={theme}>
                        <OpenLayout>{children}</OpenLayout>
                    </AppProvider>
                </AppLoader>
            </body>
        </html>
    );
}
