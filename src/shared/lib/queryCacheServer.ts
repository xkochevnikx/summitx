import { queryClient } from "./query";

/**
 * Тип, представляющий стратегию кэширования данных.
 * @template T - Тип данных, которые возвращаются из кэшируемого запроса.
 *
 * Функция принимает ключ для кэширования и асинхронную функцию `getData`,
 * которая загружает данные, если они отсутствуют в кэше.
 * @param {unknown[]} key - Массив значений, используемых в качестве ключа для кэша.
 * @param {() => Promise<T>} getData - Функция, которая возвращает промис с данными, если их нет в кэше.
 * @returns {Promise<T>} - Промис, который возвращает данные из кэша или результат выполнения `getData`, если данных нет.
 */
export type CacheStrategy = {
    <T>(key: unknown[], getData: () => Promise<T>): Promise<T>;
};

/**
 * Стратегия кэширования для выполнения запросов на сервере.
 *
 * @template T - Тип данных, которые возвращаются из запроса.
 * @param {unknown[]} key - Ключ для идентификации запроса в кэше.
 * @param {() => Promise<T>} getData - Асинхронная функция для получения данных, которая вызывается, если данные отсутствуют в кэше.
 * @returns {Promise<T>} - Промис, который возвращает данные из кэша или результат выполнения `getData`, если данных нет.
 *
 * Функция использует клиент `queryClient` для выполнения запроса и кэширования данных на определенное время.
 * Кэш считается актуальным (`staleTime`) в течение одного часа (60 * 60 * 1000 миллисекунд).
 */
export const queryCacheServer: CacheStrategy = <T>(
    key: unknown[],
    getData: () => Promise<T>,
): Promise<T> => {
    const cacheTime = 60 * 60 * 1000; // Время жизни кэша - 1 час

    return queryClient.fetchQuery({
        queryKey: key,
        queryFn: getData,
        staleTime: cacheTime,
    });
};
