'use client';
import clsx from "clsx";
import Link from "next/link";
import { FC, useState } from "react";
import styles from "./NavigationBar.module.css";
import { usePathname } from 'next/navigation'
import useScrollDetect from "@/hooks/useScrollDetect";
import Logo from "@/assets/svg/logo.svg";
import useRWD from "@/hooks/useRWD";
import { Page } from "@/payload-types";
import { CustomPage } from "@/utils/types";
import { DarkModeToggle } from "../../molecules/DarkMode/DarkModeToggle";
import NavItem from "../../molecules/NavItem";

interface Props {
  nav: (Page | CustomPage)[];
}

const NavigationBar: FC<Props> = ({ nav }) => {
  const pathname = usePathname();
  const scrolling = useScrollDetect();
  const { isDesktop } = useRWD();
  const [openNav, setOpenNav] = useState(false);

  return (
    <div
      className={clsx(
        styles.wrapperComponent,
        " dark:text-dark-font-primary text-theme-font-primary"
      )}
    >
      <div className={clsx("absolute transition-transform left-0 top-0 h-full w-full -translate-y-full bg-theme-bg-window/40 dark:bg-dark-bg-window/40", (scrolling || (openNav && !isDesktop)) && "translate-y-0 backdrop-blur-xs")} />
      <div className={styles.content}>
        <Link aria-label="Homepage" className='z-10' href={"/"}>
          <Logo className={clsx(styles.logo, "dark:fill-white")} />
        </Link>
        <button
          aria-label="Toggle Menu"
          className={clsx(
            styles.button,
            { [styles.openButton]: openNav },
            "dark:border-dark-font-primary border-theme-font-primary"
          )}
          onClick={() => setOpenNav((prev) => !prev)}
        >
          <div
            className={clsx(
              styles.icon,
              "dark:bg-dark-font-primary bg-theme-font-primary"
            )}
          />
        </button>
        <nav
          className={clsx(
            styles.nav,
            { [styles.openNav]: openNav && !isDesktop },
            "lg:bg-transparent dark:lg:bg-transparent dark:bg-dark-bg-window bg-theme-bg-window"
          )}
        >
          {nav.map((page) => (
            <NavItem
              key={page.id || page.slug}
              page={page as Page}
              closeNav={() => setOpenNav(false)}
              pathname={pathname}
            />
          ))}
        </nav>
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default NavigationBar;
