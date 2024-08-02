import { api } from "@/shared/api";
import { isAxiosCustomError } from "@/shared/lib/errors";

export const geoDataListQuery = async (search: string) =>
    await api.objectList({ q: search }).catch((error: unknown) => isAxiosCustomError(error));
