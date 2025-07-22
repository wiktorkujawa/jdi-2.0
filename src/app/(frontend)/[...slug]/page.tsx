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
    const pagesRes = await fetch(`${serverURL}/read-api/pages/top-level`, {
        cache: 'force-cache'
    });
    const pagesCollection: PaginatedDocs<PageType> = await pagesRes.json();
   
    const params: { slug: string[] }[] = [];
    const processedPaths = new Set<string>();

    // Helper function to get the path for a page
    const getPagePath = (pageSlug: string): string[] => {
      if (pageSlug.includes('/')) {
        return pageSlug.split('/');
      }
      return [pageSlug];
    };
    
    // Helper function to process a page and its subpages
    const processPage = (page: PageType) => {
      if (!page.slug) return;
      
      // Get the path for this page
      const pagePath = getPagePath(page.slug);
      const fullPath = pagePath.join('/');
      
      // Add this page if not already processed
      if (!processedPaths.has(fullPath)) {
        params.push({ slug: pagePath });
        processedPaths.add(fullPath);
      }
      
      // Process subpages
      if (page.subpages && Array.isArray(page.subpages)) {
        page.subpages.forEach((subpage) => {
          if (typeof subpage === 'object' && subpage.slug) {
            // This is a Page object
            processPage(subpage);
          }
        });
      }
    };
    
    // Process all top-level pages (API already filters them)
    pagesCollection.docs.forEach((page) => {
      processPage(page);
    });

    console.log('Generated params:', params);
    
    return params;
  }


type Props = {
    params: Promise<{ slug: string[] }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  }
   
  export async function generateMetadata(
    { params }: Props,
  ): Promise<Metadata> {
    const { slug } = await params;
    
    const pageData = await getPageData(slug.join('/'));
    if (!pageData) {
        return notFound();
    }
    const { meta } = pageData;
   
    return generateMeta(meta, slug.join('/'));
  }


export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string[] }>
  }) {
    const { slug } = await params;

    const config = await getConfig();
    const themeName = config?.selectedTheme?.name || 'default';
    
    const pageData = await getPageData(slug.join('/'));

    if (!pageData) {
        return notFound();
    }
    
    return (
        <DynamicTemplateComponent 
            theme={themeName} 
            templateType="PageTemplate" 
            data={pageData} 
        />
    )
  }