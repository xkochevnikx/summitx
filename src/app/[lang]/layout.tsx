import { OpenLayout } from "./_/layouts/OpenLayout";
import { AppLoader } from "./_/loaders/app-loader";
import { AppProvider } from "./_/providers/app-provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
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
