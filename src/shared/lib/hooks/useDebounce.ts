import { useCallback, useRef } from "react";

/**
 * Debounces a callback function to limit the rate of execution.
 *
 * @param {(...args: unknown[]) => void} callback - The function to be debounced.
 * @param {number} delay - The delay in milliseconds for debouncing.
 * @return {(...args: unknown[]) => void} A debounced version of the callback function.
 */
export const useDebounce = (callback: (...args: unknown[]) => void, delay: number) => {
    const timer = useRef<number | NodeJS.Timeout | null>(null);

    return useCallback(
        (...args: unknown[]) => {
            if (timer.current) {
                clearTimeout(timer.current as number);
            }

            timer.current = setTimeout(() => {
                callback(...args);
            }, delay);

        },
        [callback, delay],
    );
};
