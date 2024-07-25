export type Mode = Record<string, boolean | string | undefined>;

/**
 * Generates a string of class names based on the provided parameters.
 *
 * @param {string} cls - The base class name.
 * @param {Mode} [mods={}] - An optional object containing additional class names as keys and boolean values indicating whether the class should be included or not.
 * @param {Array<string | undefined>} [additional=[]] - An optional array of additional class names.
 * @return {string} The generated string of class names.
 */

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
