import { Page as PageType } from "@/payload-types";
import { PaginatedDocs } from "payload";
import type { Metadata } from 'next';
import { notFound } from "next/navigation";

import { getConfig } from "@/lib/api/config";
import { serverURL } from "@/utils/consts";
import DynamicTemplateComponent from "@/themes/templateMapper";
import { generateMeta } from "@/utils/generateMetadata";
import { getPageData } from "@/lib/api/pages";

export async function generateStaticParams() {
    const pagesRes = await fetch(`${serverURL}/read-api/pages`, {
        cache: 'force-cache'
    });
    const pagesCollection: PaginatedDocs<PageType> = await pagesRes.json();
   
    return pagesCollection.docs.map((page) => ({
      slug: page.slug,
    }))
  }


type Props = {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  }
   
  export async function generateMetadata(
    { params }: Props,
  ): Promise<Metadata> {
    const { slug } = await params;
   
    const pageData = await getPageData(slug);
    if (!pageData) {
        return notFound();
    }
    const { meta } = pageData;
   
    return generateMeta(meta, slug);
  }


export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const { slug } = await params;

    const config = await getConfig();
    const themeName = config?.selectedTheme?.name || 'default';

    const pageData = await getPageData(slug);

    if (!pageData) {
        return notFound();
    }

    console.log("pageData", pageData);
    
    return (
        <DynamicTemplateComponent 
            theme={themeName} 
            templateType="PageTemplate" 
            data={pageData} 
        />
    )
  }