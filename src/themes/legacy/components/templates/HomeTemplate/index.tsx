import { Page } from '@/payload-types';
import { CustomComponents } from '@/themes/legacy/CustomComponents';
import Masthead from '../../organisms/MastHead';
const HomeTemplate = async ({ data }: { data: Page }) => {

    console.log("data.isMasthead", data.isMasthead);

    return (
        <div className="l-home">
            {
                data?.isMasthead && <Masthead feature={data.feature} mastheadSlider={data.mastheadSlider} />
            }
            {data.customComponents && <CustomComponents blocks={data.customComponents} />}
        </div>
    )
}

export default HomeTemplate;