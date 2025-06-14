import { revalidateTag } from "next/cache"
import { GlobalAfterChangeHook } from "payload"

export const revalidateExperience: GlobalAfterChangeHook = async () => {
    revalidateTag("experience");
} 