import { z } from "zod";

import { LOCAL_STORAGE_THEME_KEY } from "@/shared/constants/theme";

import { safeLocalStorage } from "../../safeLocalStorage";

/**
 * saveThemeStorage - безопасное хранилище для управления темой (светлая/тёмная) в localStorage.
 *
 * @description
 * Использует строковую схему валидации `zod` для проверки и сохранения значения темы.
 * Хранит данные в виде строки в localStorage под ключом `LOCAL_STORAGE_THEME_KEY`. Если данные отсутствуют
 * или не проходят валидацию, используется значение по умолчанию 'false'.
 *
 * @type {ReturnType<typeof safeLocalStorage>}
 *
 * @example
 *  Установка значения 'light'
 * saveThemeStorage.set('light');
 *
 *  Получение значения
 * const theme = saveThemeStorage.get();
 *
 *  Удаление значения
 * saveThemeStorage.clear();
 */
const stringSchema = z.string();

export const saveThemeStorage = safeLocalStorage<string>(
    LOCAL_STORAGE_THEME_KEY,
    stringSchema,
    "false",
);
