import Link from "next/link";
import Image from "next/image";

export interface NavLogoProps {
  href?: string;
  iconSrc?: string;
  imgAlt?: string;
  primary?: string;
  secondary?: string;
  priority?: boolean;
  className?: string;
}

const NavLogo = ({
  href = "/",
  iconSrc = "/nav-icon.svg",
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

export default NavLogo;
