import { notFound } from 'next/navigation';

import DynamicTemplateComponent from '@/themes/templateMapper'
import { getConfig } from '@/lib/api/config';
import { getPageData } from '@/lib/api/pages';
import { Metadata } from 'next';
import { generateMeta } from '@/utils/generateMetadata';

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata(): Promise<Metadata> {

  const pageData = await getPageData();
  
  if (!pageData) {
      return notFound();
  }
  const { meta } = pageData;
 
  return generateMeta(meta, '');
}

export default async function HomePage() {

  const data = await getPageData();
  const config = await getConfig();

  const themeName = config?.selectedTheme?.name || 'default';

  if (!data) {
    return notFound();
  }

  return (
    <>
    <DynamicTemplateComponent 
      theme={themeName} 
      templateType="HomeTemplate" 
      data={data} 
    />
    </>
  )
}
