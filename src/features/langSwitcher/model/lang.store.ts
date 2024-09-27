import { getCookie, setCookie } from "cookies-next";
import { create } from "zustand";

import { COOKIES_LANGUAGE } from "@/shared/constants/cookies";

export type Lang = "ru" | "en";

type LangStore = {
    isLoading: boolean;
    lang: Lang;
    loadLang: () => void;
    setLang: (lang: Lang) => void;
};

/**
 * Хук для управления состоянием языка в приложении.
 * Загружает язык из куки или использует значение по умолчанию (русский язык).
 */
export const useLang = create<LangStore>((set, get) => ({
    isLoading: true,
    lang: "ru",
    /**
     * Функция для загрузки языка из куки и установки его в состояние.
     */
    loadLang: async () => {
        const lang = (getCookie(COOKIES_LANGUAGE) as Lang) ?? get().lang;
        set({ lang, isLoading: false });
    },
    /**
     * Функция для установки языка и сохранения его в куки.
     *
     * @param {Lang} lang - Язык, который нужно установить (например, "ru" или "en").
     */
    setLang: (lang) => {
        setCookie(COOKIES_LANGUAGE, lang);
        set({ lang });
    },
}));
