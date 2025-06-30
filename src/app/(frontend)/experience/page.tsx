import { notFound } from 'next/navigation';

import DynamicTemplateComponent from '@/themes/templateMapper';
import { getConfig } from '@/lib/api/config';
import { getPageData } from '@/lib/api/pages';


export default async function ExperiencePage() {

  const data = await getPageData('experience');
  const config = await getConfig();
  const themeName = config?.selectedTheme?.name || 'default';

  if (!data) {
    return notFound();
  }

  return (
    <DynamicTemplateComponent 
      theme={themeName} 
      templateType="ExperienceTemplate" 
      data={data} 
    />
  )
}
