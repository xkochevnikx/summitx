import { FetchQueryOptions } from "@tanstack/react-query";

import { queryClient } from "./query";

type GetQueryOptions<T> = {
    (params: {
        queryFn: ({ lang }: { lang: string }) => Promise<T>;
        lang: string;
    }): FetchQueryOptions<T>;
};

/**
 * Retrieves data from a request function and returns a promise that resolves to the received data, available for use on both the server and client *
 *
 * @template T - The type of the data to be fetched.
 *
 * @param {GetQueryOptions<T>} getQueryOptions - A function that generates the query options.
 * @param {{ queryFn: ({ lang }: { lang: string }) => Promise<T>; lang: string }} params - The parameters for the query.
 * @return {Promise<T>} A promise that resolves to the fetched data.
 */

export async function fetchQueryFacade<T>(
    getQueryOptions: GetQueryOptions<T>,
    params: { queryFn: ({ lang }: { lang: string }) => Promise<T>; lang: string },
): Promise<T> {
    const queryOptions = getQueryOptions({
        queryFn: () => params.queryFn({ lang: params.lang }),
        lang: params.lang,
    });

    return await queryClient.fetchQuery(queryOptions);
}
