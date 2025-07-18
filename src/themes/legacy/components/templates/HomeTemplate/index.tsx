import { Page } from '@/payload-types';
import { CustomComponents } from '@/themes/legacy/CustomComponents';
import Masthead from '../../organisms/MastHead';
import Brief from '../../organisms/Brief';

const HomeTemplate = async ({ data }: { data: Page }) => {

    return (
        <div className="l-home">
            {
                data?.isMasthead && <Masthead feature={data.feature} mastheadSlider={data.mastheadSlider} />
            }
            <Brief arrowScroll="list" />
            {data.customComponents && <CustomComponents blocks={data.customComponents} />}
        </div>
    )
}

export default HomeTemplate;