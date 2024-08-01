import { QueryClient } from "@tanstack/react-query";

export interface CacheStrategy {
    fetch<T>(key: unknown[], getData: () => Promise<T>): Promise<T>;
}

class QueryCacheStrategy implements CacheStrategy {
    private timer: ReturnType<typeof setInterval>;
    private cache: boolean;
    private queryClient: QueryClient;

    constructor(queryClient: QueryClient, cache: boolean = false) {
        this.queryClient = queryClient;
        this.cache = cache;
        this.timer = setInterval(
            () => {
                if (this.cache) {
                    this.queryClient.refetchQueries();
                }
            },
            this.cache ? 60 * 60 * 1000 : 0,
        );
    }

    fetch<T>(key: unknown[], getData: () => Promise<T>): Promise<T> {
        return this.queryClient.fetchQuery({
            queryKey: key,
            queryFn: getData,
        });
    }

    stopRefetching() {
        clearInterval(this.timer);
    }
}

export const queryCacheFetch = new QueryCacheStrategy(queryClient, true);
export const queryCacheFetchWithoutCache = new QueryCacheStrategy(queryClient, false);
