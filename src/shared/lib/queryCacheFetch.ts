import { QueryClient } from "@tanstack/react-query";

export interface CacheStrategy {
    fetch<T>(key: unknown[], getData: () => Promise<T>): Promise<T>;
}

class QueryCacheStrategy implements CacheStrategy {
    private timer: ReturnType<typeof setInterval>;

    constructor(
        private queryClient = new QueryClient({
            defaultOptions: {
                queries: {
                    staleTime: Infinity,
                },
            },
        }),
    ) {
        this.timer = setInterval(
            () => {
                queryClient.refetchQueries();
            },
            60 * 60 * 1000,
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

export const queryCacheFetch = new QueryCacheStrategy();
