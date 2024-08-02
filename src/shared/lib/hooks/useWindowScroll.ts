import { useEffect, useState } from "react";

export type ScrollPosition = {
    x: number;
    y: number;
};

/**
 * @name useWindowScroll
 * @description - Hook that manages the window scroll position
 * @category Browser
 *
 * @returns {UseWindowScrollReturn} An object containing the current window scroll position
 *
 * @example
 * const { value, scrollTo } = useWindowScroll();
 * */
export const useWindowScroll = () => {
    const [value, setValue] = useState<ScrollPosition>({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            const onChange = () => setValue({ x: window.scrollX, y: window.scrollY });
            window.addEventListener("scroll", onChange);
            window.addEventListener("resize", onChange);
            return () => {
                window.removeEventListener("scroll", onChange);
                window.removeEventListener("resize", onChange);
            };
        }
    }, []);

    return { value };
};
