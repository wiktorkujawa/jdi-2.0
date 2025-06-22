import React from 'react'
import DynamicTemplateComponent from '../themes/templateMapper';
import { serverURL } from '@/utils/consts';
import { Page } from '@/payload-types';
import { notFound } from 'next/navigation';

const getPageData = async () => {
  const pageRes = await fetch(`${serverURL}/read-api/pages/experience`, {
    cache: 'force-cache'
  });
  const page: Page = await pageRes.json();
  if (!pageRes.ok) {
    return null;
  }
  return page;
}

const getConfig = async () => {
  const config = await fetch(`${serverURL}/read-api/config`);
  return config.json();
}

export default async function ExperiencePage() {

  const data = await getPageData();
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
