import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getConfig } from '@/lib/api/config'
import { getPageData } from '@/lib/api/pages'
import DynamicTemplateComponent from '@/themes/templateMapper'
import { generateMeta } from '@/utils/generateMetadata'

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageData('experience')

  if (!pageData) {
    return notFound()
  }
  const { meta } = pageData

  return generateMeta(meta, 'experience')
}

export default async function ExperiencePage() {
  const data = await getPageData('experience')
  const config = await getConfig()
  const themeName = config?.selectedTheme?.name || 'default'

  if (!data) {
    return notFound()
  }

  return (
    <DynamicTemplateComponent theme={themeName} templateType="ExperienceTemplate" data={data} />
  )
}
