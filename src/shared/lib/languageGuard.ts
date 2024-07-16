import { LANGUAGES } from "../constants/languages";

export const langGuard = (lang: string) => LANGUAGES.find((l) => l === lang);
