import { loggedMethod } from "@/shared/lib/logger/logger";

import { getRangesListService } from "../services/getRangesList";

export const getTopListLoggedMethod = loggedMethod({
    msg: "Fetching top regions",
    logArgs: (args: { parent_id: number[]; locale_lang: string }) => args,
    logRes: (res: any) => ({ res }),
})(getRangesListService);

export const getSecondListLoggedMethod = loggedMethod({
    msg: "Fetching child regions",
    logArgs: (args: { parent_id: number[]; locale_lang: string }) => args,
    logRes: (res: any) => ({ res }),
})(getRangesListService);
