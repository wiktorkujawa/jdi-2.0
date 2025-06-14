import { revalidateTag } from "next/cache"
import { GlobalAfterChangeHook } from "payload"

export const revalidateFooter: GlobalAfterChangeHook = async () => {
    revalidateTag("footer");
}
