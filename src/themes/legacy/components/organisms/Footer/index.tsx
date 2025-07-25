import { Social } from '@/payload-types'

import { getFooterData } from '@/lib/api/footer'

import SVG from '../../atoms/SVG'

export default async function Footer() {
  const data = await getFooterData()

  return (
    <footer className="c-footer dark:bg-dark-bg-window bg-theme-bg-window dark:text-dark-font-primary text-theme-font-primary">
      <div className="o-container o-container--lg">
        <div className="flex py-8 border-b border-theme-border dark:border-dark-border">
          <p className="font-bold w-28 text-p1">ADDRESS</p>
          <address className="text-p1">
            {data?.address.street} <br />
            {data?.address.city} <br />
            {data?.address.country}
          </address>
        </div>

        <div className="flex items-center py-8 border-b border-theme-border dark:border-dark-border">
          <p className="font-bold w-28 text-p1">PHONE</p>
          <address>
            {data?.phone?.map(({ id, number }) => (
              <a className="block hover:text-red-hover text-p1" href={`tel:+${number}`} key={id}>
                {`+${number}`.match(/.{1,3}/g)?.map((item, index) => (
                  <span className="pr-2" key={index}>
                    {item}
                  </span>
                ))}
              </a>
            ))}
          </address>
        </div>

        <div className="flex items-center py-8 border-b border-theme-border dark:border-dark-border">
          <p className="font-bold w-28 text-p1">EMAIL</p>
          <address>
            {data?.emails?.map(({ id, email }) => (
              <a className="block hover:text-red-hover text-p1" href={`mailto:${email}`} key={id}>
                {email}
              </a>
            ))}
          </address>
        </div>

        <div className="flex py-8">
          <p className="font-bold w-28 text-p1">SOCIAL</p>
          <address className="flex gap-x-4">
            {data?.socials?.map((social) => {
              const socialData = social as Social
              return (
                <a
                  className="block"
                  key={socialData.id}
                  target="_blank"
                  href={socialData.url ?? ''}
                >
                  <SVG name={socialData.name ?? ''} className="hover:opacity-60" />
                </a>
              )
            })}
          </address>
        </div>
      </div>
    </footer>
  )
}
