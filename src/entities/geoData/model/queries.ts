import { UseQueryOptions } from "@tanstack/react-query";

import { api } from "@/shared/api";

const userQueryKey = "geoData";

export const geoDataListQuery = (search: string) =>
    ({
        queryKey: [userQueryKey, "list", search],
        queryFn: () => api.objectList({ q: search }),
    }) satisfies UseQueryOptions;
