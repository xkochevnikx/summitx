import { NextRequest, NextResponse } from "next/server";

import { COOKIES_LANGUAGE, DEFAULT_LANGUAGE } from "./shared/constants/cookies";
import { LANGUAGES } from "./shared/constants/languages";

export const config = {
    matcher: ["/((?!_next/static|static|favicon.ico|robots.txt|logo.png|sitemap.xml|images).*)"],
};

export function middleware(req: NextRequest) {
    const cookieLocale = req.cookies.get(COOKIES_LANGUAGE)?.value ?? DEFAULT_LANGUAGE;
    const langInPath = LANGUAGES.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`));
    const nextDir = req.nextUrl.pathname.startsWith("/_next");

    if (!langInPath && !nextDir) {
        const newUrl = new URL(
            `/${cookieLocale}${req.nextUrl.pathname}${req.nextUrl.search}`,
            req.url,
        );

        return NextResponse.redirect(newUrl);
    }

    return NextResponse.next();
}
