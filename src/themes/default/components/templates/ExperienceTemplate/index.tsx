import { Page } from '@/payload-types';
import { CustomComponents } from '@/themes/default/CustomComponents';

const ExperienceTemplate = async ({ data }: { data: Page }) => {

    return (
        <div className="l-experience">
            {data.customComponents && <CustomComponents blocks={data.customComponents} />}
        </div>
    )
}

export default ExperienceTemplate;