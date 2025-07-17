import { Page } from '@/payload-types';
import { CustomComponents } from '@/themes/legacy/CustomComponents';
import Masthead from '@/themes/legacy/components/organisms/MastHead';

const PageTemplate = async ({ data }: { data: Page }) => {

    return (
        <div className="l-page">
            {
                data?.isMasthead && <Masthead feature={data.feature} mastheadSlider={data.mastheadSlider} />
            }
            {data.customComponents && <CustomComponents blocks={data.customComponents} />}
        </div>
    )
}

export default PageTemplate;