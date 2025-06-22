import { Page } from '@/payload-types';

const ExperienceTemplate = async ({ data }: { data: Page }) => {

    console.log("pageData", data);
    return (
        <div className="l-home">
            Hello template
        </div>
    )
}

export default ExperienceTemplate;