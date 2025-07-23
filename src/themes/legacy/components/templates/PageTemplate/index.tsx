import { Page } from '@/payload-types'

import CustomComponents from '../../../CustomComponents'
import Masthead from '../../organisms/MastHead'

const PageTemplate = async ({ data }: { data: Page }) => {
  return (
    <div className="l-page">
      {data?.isMasthead && <Masthead feature={data.feature} mastheadSlider={data.mastheadSlider} />}
      {data.customComponents && <CustomComponents blocks={data.customComponents} />}
    </div>
  )
}

export default PageTemplate
