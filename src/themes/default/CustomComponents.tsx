import dynamic from 'next/dynamic'

import { Page } from '@/payload-types'

const DynamicComponent = (blockType: string) =>
  dynamic(() => import(`./components/organisms/${blockType}`))

const CustomComponents = ({ blocks }: { blocks: Page['customComponents'] }) => {
  return (
    <>
      {blocks?.map((component) => {
        const TemplateComponent = DynamicComponent(component.blockType) as React.ComponentType<
          typeof component
        >
        return <TemplateComponent key={component.id} {...component} />
      })}
    </>
  )
}

export default CustomComponents
