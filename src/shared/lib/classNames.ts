export type Mode = Record<string, boolean | string | undefined>;

export function classNames(
    cls: string,
    mods: Mode = {},
    additional: Array<string | undefined> = [],
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className, _]) => className),
    ].join(" ");
}

// classNames('remove-btn', { [cls.collapsed]: collapsed }, ['btn']);
