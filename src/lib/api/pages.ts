import { Page } from "@/payload-types";
import { serverURL } from "@/utils/consts";

export const getPageData = async (slug: string = 'home') => {
    const pageRes = await fetch(`${serverURL}/read-api/pages/${slug}`, {
      cache: 'force-cache'
    });
    const page: Page = await pageRes.json();
    if (!pageRes.ok) {
      return null;
    }
    return page;
  }