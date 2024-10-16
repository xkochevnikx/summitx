export type Lang = "ru" | "en";

export type LangStore = {
    isLoading: boolean;
    lang: Lang;
    loadLang: (lang: Lang) => void;
    setLang: (lang: Lang) => void;
};
