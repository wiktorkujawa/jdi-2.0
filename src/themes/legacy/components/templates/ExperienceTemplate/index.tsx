import { Page } from '@/payload-types';
import { CustomComponents } from '@/themes/legacy/CustomComponents';

const ExperienceTemplate = async ({ data }: { data: Page }) => {

    console.log("pageData", data);
    return (
        <div className="l-experience">
            {data.customComponents && <CustomComponents blocks={data.customComponents} />}
        </div>
    )
}

export default ExperienceTemplate;