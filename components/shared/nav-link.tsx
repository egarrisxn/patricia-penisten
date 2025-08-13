"use client";

import { type AnchorHTMLAttributes, forwardRef } from "react";
import Link from "next/link";

export interface NavLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  className?: string;
  name: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ name, href, className = "", ...rest }, ref) => {
    return (
      <Link
        href={href}
        className={`${className} group hover:text-primary relative cursor-pointer text-sm font-medium tracking-[-0.005em] transition-colors lg:text-base`}
        ref={ref as any}
        {...rest}
      >
        {name}
        <span className='bg-primary absolute -bottom-0.5 left-0 block h-0.5 w-0 transition-all duration-300 group-hover:w-full'></span>
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";

export default NavLink;
