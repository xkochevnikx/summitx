import { loggedMethod } from "@/shared/lib/logger/logger";

import { getRangesItemService } from "../services/getRangesItem";

export const getRangesLoggedMethod = loggedMethod({
    msg: "Fetching region",
    logArgs: (id: number, locale_lang: string) => ({ id, locale_lang }),
    logRes: (res: any) => ({ res }),
})((id: number, locale_lang: string) => getRangesItemService({ id, locale_lang }));
