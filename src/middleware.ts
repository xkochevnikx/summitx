import { NextRequest, NextResponse } from "next/server";

import { COOKIES_LANGUAGE, DEFAULT_LANGUAGE } from "./shared/constants/cookies";
import { LANGUAGES } from "./shared/constants/languages";

/**
 * Конфигурация middleware указывает, какие пути должны быть обработаны.
 * Исключены системные директории и файлы, такие как _next/static, favicon, robots.txt, и т.д.
 */
export const config = {
    matcher: ["/((?!_next/static|static|favicon.ico|robots.txt|logo.png|sitemap.xml|images).*)"],
};

/**
 * Middleware для автоматической обработки языка приложения и редиректа на путь с нужной локалью.
 *
 * @param {NextRequest} req - Запрос от клиента. Содержит информацию о cookies, URL и заголовках.
 *
 * @returns {NextResponse} - Возвращает редирект на URL с языком из cookies или продолжает запрос, если язык уже указан в пути.
 */
export function middleware(req: NextRequest) {
    // Получаем язык из cookies. Если он отсутствует, используется язык по умолчанию.
    const cookieLocale = req.cookies.get(COOKIES_LANGUAGE)?.value ?? DEFAULT_LANGUAGE;

    // Проверяем, есть ли уже язык в пути запроса.
    const langInPath = LANGUAGES.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`));

    // Проверяем, является ли запрос системным (для ресурсов внутри директории /_next).
    const nextDir = req.nextUrl.pathname.startsWith("/_next");

    // Если язык не указан в пути и запрос не является системным, перенаправляем на путь с языком из cookies.
    if (!langInPath && !nextDir) {
        const newUrl = new URL(
            `/${cookieLocale}${req.nextUrl.pathname}${req.nextUrl.search}`,
            req.url,
        );

        // Редирект на новый URL с языком из cookies
        return NextResponse.redirect(newUrl);
    }

    // Если язык уже присутствует в пути или это системный запрос, продолжаем обработку запроса.
    return NextResponse.next();
}
