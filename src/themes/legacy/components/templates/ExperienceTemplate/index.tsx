import { Page } from '@/payload-types'

import CustomComponents from '../../../CustomComponents'
import Education from '../../organisms/Education'
import Experience from '../../organisms/Experience'
import Masthead from '../../organisms/MastHead'

const ExperienceTemplate = async ({ data }: { data: Page }) => {
  return (
    <div className="l-experience">
      {data?.isMasthead && <Masthead feature={data.feature} mastheadSlider={data.mastheadSlider} />}
      <Experience />
      <Education />
      {data.customComponents && <CustomComponents blocks={data.customComponents} />}
    </div>
  )
}

export default ExperienceTemplate
