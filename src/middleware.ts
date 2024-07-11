import { NextRequest, NextResponse } from "next/server";

import { COOKIES_LANGUAGE, DEFAULT_LANGUAGE } from "./shared/constants/cookies";
import { LANGUAGES } from "./shared/constants/languages";

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)",
        "/favicon.ico",
    ],
};

export function middleware(req: NextRequest) {
    const cookieLocale = req.cookies.get(COOKIES_LANGUAGE)?.value ?? DEFAULT_LANGUAGE;
    const langInPath = LANGUAGES.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`));
    const nextDir = req.nextUrl.pathname.startsWith("/_next");
    if (!langInPath && !nextDir) {
        return NextResponse.redirect(new URL(`/${cookieLocale}${req.nextUrl.pathname}`, req.url));
    }

    return NextResponse.next();
}
