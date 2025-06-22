import { serverURL } from "@/utils/consts";
import DynamicTemplateComponent from "../themes/templateMapper";
import { Page as PageType } from "@/payload-types";
import { PaginatedDocs } from "payload";
import { generateMeta } from "@/utils/generateMetadata";
import type { Metadata } from 'next';
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const pagesRes = await fetch(`${serverURL}/read-api/pages`);
    const pagesCollection: PaginatedDocs<PageType> = await pagesRes.json();
   
    return pagesCollection.docs.map((page) => ({
      slug: page.slug,
    }))
  }


const getPageData = async (slug: string) => {
    const pageRes = await fetch(`${serverURL}/read-api/pages/${slug}`);
    if (!pageRes.ok) {
        return null;
    }
    const pageData: PageType = await pageRes.json();
    return pageData;
}

const getConfig = async () => {
    const config = await fetch(`${serverURL}/read-api/config`);
    return config.json();
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