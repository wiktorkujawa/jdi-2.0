import { Page } from '@/payload-types';

const HomeTemplate = async ({ data }: { data: Page }) => {

    console.log("pageData", data);
    return (
        <div className="l-home">
            <div>
                <section className="o-container o-container--lg my-12">
                    <div className="bg-main">
                    <h2>First section</h2>
                    </div>
                </section>

                <section className="o-container o-container--md my-12">
                    <div className="bg-main">
                    <h2>Second section</h2>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HomeTemplate;