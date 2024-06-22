"use client";
import { Lang, useLang } from "../model/lang.store";

type LangOption = {
    id: Lang;
    label: string;
};

const langOptions: LangOption[] = [
    { id: "en", label: "En" },
    { id: "ru", label: "Ru" },
];

export function UpdateLang({ className }: { className?: string }) {
    const { lang, setLang } = useLang();

    const onChangeLang = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLang = event.target.value as Lang;
        setLang(selectedLang);
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
