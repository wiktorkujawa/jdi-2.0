import { Footer as FooterType } from "@/payload-types";
import { serverURL } from "@/utils/consts";


const getFooterData = async () => {
    const footerRes = await fetch(`${serverURL}/read-api/footer`, {
        cache: 'force-cache'
    });
    const footer: FooterType = await footerRes.json();
    return footer;
}


export default async function Footer() {
    const data = await getFooterData();
    return (
        <footer className="c-footer dark:bg-dark-bg-window bg-theme-bg-window dark:text-dark-font-primary text-theme-font-primary">
            <div className="o-container o-container--lg child:py-8 child:border-b-1 dark:child:border-dark-border child:border-theme-border last:child:border-none">
            <div className="flex">
            <p className="font-bold w-28 text-p1">ADDRESS</p>
            <address className="text-p1">
                {data?.address.street} <br />
                {data?.address.city} <br />
                {data?.address.country}
            </address>
            </div>

            <div className="flex items-center">
            <p className="font-bold w-28 text-p1">PHONE</p>
            <address>
                {data?.phone?.map(({ id, number }) => (
                <a
                    className="block hover:text-red-hover text-p1"
                    href={`tel:+${number}`}
                    key={id}
                >
                    {`+${number}`.match(/.{1,3}/g)?.map((item, index) => (
                    <span className="pr-2" key={index}>{item}</span>
                    ))}
                </a>
                ))}
            </address>
            </div>

            <div className="flex items-center">
            <p className="font-bold w-28 text-p1">EMAIL</p>
            <address>
                {data?.emails?.map(({ id, email }) => (
                <a
                    className="block hover:text-red-hover text-p1"
                    href={`mailto:${email}`}
                    key={id}
                >
                    {email}
                </a>
                ))}
            </address>
            </div>

            <div className="flex">
            <p className="font-bold w-28 text-p1">SOCIAL</p>
            <address className="flex gap-x-4">
                {/* {data?.socials?.map(({ id, name, url }) => (
                <a className="block" key={id} target="_blank" href={url}>
                    <Asvg name={name} className="hover:opacity-60" />
                </a>
                ))} */}
                </address>
                </div>
            </div>
        </footer>
    )
}