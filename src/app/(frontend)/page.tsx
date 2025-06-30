import { notFound } from 'next/navigation';

import DynamicTemplateComponent from '@/themes/templateMapper'
import { getConfig } from '@/lib/api/config';
import { getPageData } from '@/lib/api/pages';

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
