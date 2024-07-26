
type QueryFunctionType<T> = ({ lang }: { lang: string }) => Promise<T>;

export const getRegionsQuery = <T>({
    queryFn,
    lang,
}: {
    queryFn: QueryFunctionType<T>;
    lang: string;
}) => ({
    queryKey: ["OrganizedRegions", lang],
    queryFn: () => queryFn({ lang }),
    staleTime: 5 * 60 * 1000,
});
