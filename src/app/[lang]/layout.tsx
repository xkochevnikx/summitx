import { OpenLayout } from "./_/layouts/OpenLayout";
import { AppLoader } from "./_/loaders/app-loader";
import { AppProvider } from "./_/providers/app-provider";

export default function RootLayout({
    children,
    params: { lang },
}: {
    children: React.ReactNode;
    params: { lang: string };
}) {
    return (
        <html lang={lang}>
            <body>
                <AppLoader>
                    <AppProvider>
                        <OpenLayout>{children}</OpenLayout>
                    </AppProvider>
                </AppLoader>
            </body>
        </html>
    );
}
