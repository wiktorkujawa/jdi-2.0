import Link from 'next/link'

import clsx from 'clsx'

import { Page } from '@/payload-types'

import styles from './NavItem.module.css'

interface NavItemProps {
  page: Page
  closeNav: () => void
  pathname: string
  level?: number
}

const relativeLink = (link: string) => (link[0] == '/' ? link : `/${link}`)

const NavItem: React.FC<NavItemProps> = ({ page, closeNav, pathname, level = 0 }) => {
  return (
    <div className={clsx(`relative`, styles.navGroup, { 'pl-4 w-40': level > 0 })}>
      <Link
        onClick={closeNav}
        className={clsx(
          level > 0 ? styles.sublink : styles.link,
          pathname == relativeLink(page.slug || '') ? 'text-pink-500' : '',
          'text-ellipsis overflow-hidden',
        )}
        href={relativeLink(page.slug || '')}
      >
        {page.title}
      </Link>
      {Array.isArray(page.subpages) && page.subpages.length > 0 && (
        <div
          className={clsx(
            'lg:hidden block min-w-full lg:text-center lg:pl-0 pl-5 dark:bg-dark-bg-window bg-theme-bg-window',
            'lg:absolute right-0 z-50',
            level > 0 ? 'lg:-translate-x-full top-0' : 'top-full',
            styles.submenu,
          )}
        >
          {(page.subpages as Page[]).map((subpage, idx) =>
            typeof subpage === 'object' && subpage !== null ? (
              <NavItem
                key={subpage.id || subpage.slug || idx}
                page={subpage}
                closeNav={closeNav}
                pathname={pathname}
                level={level + 1}
              />
            ) : null,
          )}
        </div>
      )}
    </div>
  )
}
export default NavItem
