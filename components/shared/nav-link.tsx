import Link from "next/link";
import { AnchorHTMLAttributes, forwardRef } from "react";

export interface NavLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  name: string;
  href: string;
  className?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ name, href, className = "", ...rest }, ref) => {
    return (
      <Link
        href={href}
        className={`group hover:text-primary relative cursor-pointer font-medium tracking-[-0.005em] transition-colors sm:text-sm lg:text-base ${className}`}
        ref={ref as any}
        {...rest}
      >
        {name}
        <span className='sm:bg-primary absolute -bottom-0.5 left-0 hidden h-0.5 w-0 transition-all duration-300 group-hover:w-full sm:block'></span>
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";

export default NavLink;
