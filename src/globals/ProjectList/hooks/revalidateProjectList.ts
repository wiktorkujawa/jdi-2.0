import { revalidateTag } from "next/cache"
import { GlobalAfterChangeHook } from "payload"

export const revalidateProjectList: GlobalAfterChangeHook = async () => {
    revalidateTag("projectsList");
} 