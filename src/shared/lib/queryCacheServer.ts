import { queryClient } from "./query";

export type CacheStrategy = {
    <T>(key: unknown[], getData: () => Promise<T>): Promise<T>;
};

export const queryCacheServer: CacheStrategy = <T>(
    key: unknown[],
    getData: () => Promise<T>,
): Promise<T> => {
    const cacheTime = 60 * 60 * 1000;

    return queryClient.fetchQuery({
        queryKey: key,
        queryFn: getData,
        staleTime: cacheTime,
    });
};
