"use client";

import { usePathname, useRouter } from "next/navigation";

import { useLang } from "../model/lang.store";
import { Lang } from "../model/types";

import { LangOption } from "./types";

const langOptions: LangOption[] = [
    { id: "en", label: "En" },
    { id: "ru", label: "Ru" },
];

/**
 * Компонент для изменения языка приложения.
 * При изменении языка обновляет URL и сохраняет новый язык в состоянии.
 *
 * @param {Object} props - Свойства компонента.
 * @param {string} [props.className] - CSS-класс для элемента `<select>`.
 */
export function UpdateLang({ className }: { className?: string }) {
    const router = useRouter();
    const pathname = usePathname();
    const { lang, setLang } = useLang();

    /**
     * Обработчик изменения языка.
     * При выборе нового языка обновляет состояние, сохраняет язык в куки и изменяет URL.
     *
     * @param {React.ChangeEvent<HTMLSelectElement>} event - Событие изменения в элементе `<select>`.
     */
    const onChangeLang = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLang = event.target.value as Lang;
        setLang(selectedLang);
        router.push(`/${selectedLang}/${pathname.split("/").slice(2).join("/")}`);
    };

    return (
        <select className={className} value={lang} onChange={onChangeLang}>
            {langOptions.map((option) => (
                <option key={option.id} value={option.id}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}
