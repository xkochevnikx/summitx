import { OrganizedRegions } from "@/features/organizeRanges";

export const getRegionsQuery = ({
    organizeRanges,
    lang,
}: {
    organizeRanges: ({ lang }: { lang: string }) => Promise<OrganizedRegions>;
    lang: string;
}) => ({
    queryKey: ["query", lang],
    queryFn: () => organizeRanges({ lang }),
    staleTime: 5 * 60 * 1000,
});
