import Link from "next/link";
import Image from "next/image";

export interface NavLogoProps {
  primary: string;
  secondary: string;
  href?: string;
  iconSrc?: string;
  imgAlt?: string;
  priority?: boolean;
  className?: string;
}

export default function NavLogo({
  primary,
  secondary,
  href = "/",
  iconSrc = "/shared/nav-icon.svg",
  imgAlt = "Logo",
  priority = false,
  className = "",
}: NavLogoProps) {
  return (
    <Link
      href={href}
      className={`flex cursor-pointer flex-row items-center gap-1.5 pl-[1.5px] ${className}`}
    >
      <Image
        src={iconSrc}
        alt={imgAlt}
        width={64}
        height={64}
        quality={100}
        priority={priority}
        className='size-9 lg:size-11'
      />
      <p className='text-accent-foreground font-serif leading-none font-semibold tracking-[-0.005em] lg:text-lg'>
        {primary}
        <br />
        {secondary}
      </p>
    </Link>
  );
}
