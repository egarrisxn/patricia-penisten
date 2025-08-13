"use client";

import NavLink from "@/components/shared/nav-link";
import ThemeButton from "@/components/shared/theme-button";
import { useScrolled } from "@/hooks/use-scrolled";

export default function MainNavbar({
  logo,
  navLinks,
  extraLeft,
  extraRight,
  transparentClasses,
  scrolledClasses,
}: any) {
  const scrolled = useScrolled();
  return (
    <header
      className={`fixed top-0 z-100 w-full transition-all duration-300 ${
        scrolled ? scrolledClasses : transparentClasses
      }`}
    >
      <div className='mx-auto flex items-center justify-between px-3 py-4 sm:px-2 md:px-4'>
        <div className='flex items-center gap-2.5 lg:gap-4 2xl:gap-6'>
          {logo}
          {extraLeft}
        </div>
        <div className='flex items-center gap-2.5 lg:gap-4 2xl:gap-6'>
          <nav className='hidden gap-2.5 sm:flex lg:gap-4 2xl:gap-8'>
            {navLinks.map((link: any) => (
              <NavLink key={link.name} {...link} />
            ))}
          </nav>
          <nav className='flex sm:hidden'>{extraRight}</nav>
          <ThemeButton />
        </div>
      </div>
    </header>
  );
}
