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
export const useLang = create<LangStore>((set, get) => ({
    isLoading: true,
    lang: "ru",
    loadLang: async () => {
        const lang = (getCookie(COOKIES_LANGUAGE) as Lang) ?? get().lang;
        set({ lang, isLoading: false });
    },
    setLang: (lang) => {
        setCookie(COOKIES_LANGUAGE, lang);
        set({ lang });
    },
}));
