import React from 'react'
import DynamicTemplateComponent from './themes/templateMapper'
import { serverURL } from '@/utils/consts';
import { Page } from '@/payload-types';
import { notFound } from 'next/navigation';

const getPageData = async () => {
  const pageRes = await fetch(`${serverURL}/read-api/pages/home`, {
    cache: 'force-cache'
  });
  const page: Page = await pageRes.json();
  if (!pageRes.ok) {
    return null;
  }
  return page;
}

const getConfig = async () => {
  const config = await fetch(`${serverURL}/read-api/config`, {
    cache: 'force-cache'
  });
  return config.json();
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
    <div className="home">
      <section className="o-container o-container--lg my-12">
        <div className="bg-main">
          <h2>First section</h2>
        </div>
      </section>

      <section className="o-container o-container--md my-12">
        <div className="bg-main">
          <h2>Second section</h2>
        </div>
      </section>
    </div>
    </>
  )
}
