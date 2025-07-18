import { Page } from '@/payload-types';
import { CustomComponents } from '@/themes/legacy/CustomComponents';
import Education from '../../organisms/Education';

const ExperienceTemplate = async ({ data }: { data: Page }) => {

    return (
        <div className="l-experience">
            <Education />
            {data.customComponents && <CustomComponents blocks={data.customComponents} />}
        </div>
    )
}

export default ExperienceTemplate;