import { Page } from '@/payload-types'

import CustomComponents from '../../../CustomComponents'

const HomeTemplate = async ({ data }: { data: Page }) => {
  return (
    <div className="l-home">
      {data.customComponents && <CustomComponents blocks={data.customComponents} />}
    </div>
  )
}

export default HomeTemplate
