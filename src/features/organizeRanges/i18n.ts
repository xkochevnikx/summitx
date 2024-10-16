import { createI18nModule } from "@/shared/lib/providers/langSwitchProvider";

export const useI18n = createI18nModule({
    title: {
        en: "Hello",
        ru: "Привет",
    },
} as const);
