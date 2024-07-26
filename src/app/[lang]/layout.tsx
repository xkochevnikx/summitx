import { OpenLayout } from "./_/layouts/openLayout";
import { AppLoader } from "./_/loaders/app-loader";
import { AppProvider } from "./_/providers/app-provider";
import "./_/style/index.css";
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
