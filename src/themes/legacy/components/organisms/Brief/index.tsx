import { getBriefData } from '@/lib/api/brief'
import { BlockProps } from '@/utils/types'

import HeadingCopy from '../../organisms/HeadingCopy'

type Props = {
  arrowScroll?: string
}

const Brief = async ({ arrowScroll }: Props) => {
  const briefData = await getBriefData()
  return <HeadingCopy {...(briefData as BlockProps<'HeadingCopy'>)} arrowScroll={arrowScroll} />
}

export default Brief
