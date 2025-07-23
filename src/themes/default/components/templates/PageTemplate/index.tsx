import { Page } from '@/payload-types'
import { CustomComponents } from '@/themes/default/CustomComponents'
const PageTemplate = async ({ data }: { data: Page }) => {
  return (
    <div className="l-page">
      {data.customComponents && <CustomComponents blocks={data.customComponents} />}
    </div>
  )
}

export default PageTemplate
