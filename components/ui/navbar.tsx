"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeButton from "@/components/ui/theme-button";
import { useScrolled } from "@/hooks/use-scrolled";

interface NavLogoProps {
  href?: string;
  iconSrc?: string;
  imgAlt?: string;
  primary?: string;
  secondary?: string;
  priority?: boolean;
  className?: string;
}

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  name: string;
}

interface NavbarProps {
  logo: React.ReactNode;
  navLinks: { name: string; href: string }[];
  extraLeft?: React.ReactNode;
  extraRight?: React.ReactNode;
  transparentClasses?: string;
  scrolledClasses?: string;
  isStatic?: boolean;
}

const NavLogo = ({
  href = "/",
  iconSrc = "/nav-icon.png",
  imgAlt = "Navbar Logo",
  primary,
  secondary,
  priority = true,
  className = "",
}: NavLogoProps) => {
  return (
    <Link href={href} className='flex items-center gap-1.5 pl-[1.5px]'>
      <Image
        src={iconSrc}
        alt={imgAlt}
        width={64}
        height={64}
        quality={100}
        priority={priority}
        className={`${className} size-9 lg:size-11`}
      />
      <p className='font-serif leading-none font-semibold tracking-[-0.005em] lg:text-lg'>
        {primary}
        <br />
        {secondary}
      </p>
    </Link>
  );
};

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ name, href, className, ...rest }, ref) => {
    return (
      <Link
        href={href}
        className={`group hover:text-primary relative cursor-pointer text-sm font-medium tracking-[-0.005em] transition-colors lg:text-base ${className || ""}`}
        ref={ref}
        {...rest}
      >
        {name}
        <span className='bg-primary absolute -bottom-0.5 left-0 block h-0.5 w-0 transition-all duration-300 group-hover:w-full'></span>
      </Link>
    );
  }
);
NavLink.displayName = "NavLink";

const Navbar = ({
  logo,
  navLinks,
  extraLeft,
  extraRight,
  transparentClasses,
  scrolledClasses,
  isStatic = false,
}: NavbarProps) => {
  const scrolled = useScrolled();

  const headerClasses = isStatic
    ? `w-full ${transparentClasses}`
    : `fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? scrolledClasses : transparentClasses
      }`;

  return (
    <header className={headerClasses}>
      <div className='mx-auto flex items-center justify-between px-3 py-4 sm:px-2 md:px-4'>
        <div className='flex items-center gap-2.5 lg:gap-4 2xl:gap-6'>
          {logo}
          {extraLeft}
        </div>
        <div className='flex items-center gap-2.5 lg:gap-4 2xl:gap-6'>
          <nav className='hidden gap-2.5 sm:flex lg:gap-4 2xl:gap-8'>
            {navLinks.map((link) => (
              <NavLink key={link.name} {...link} />
            ))}
          </nav>
          <nav className='flex sm:hidden'>{extraRight}</nav>
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};

export { NavLink, NavLogo, Navbar };
