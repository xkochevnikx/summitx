import { createI18nModule } from "@/shared/lib/i18n";

export const useI18n = createI18nModule({
    title: {
        en: "Hello",
        ru: "Привет",
    },
} as const);
