import { Page } from '@/payload-types';

const PageTemplate = async ({ data }: { data: Page }) => {
   
    console.log("What is the page data?", data);

    return (
        <div className="l-page">
            Hello landing page
        </div>
    )
}

export default PageTemplate;