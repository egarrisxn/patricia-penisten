import Link from "next/link";
import { Home } from "lucide-react";
import NavLogo from "@/components/shared/nav-logo";
import NavLink from "@/components/shared/nav-link";
import CustomAudioPlayer from "@/components/shared/audio-player";
import ThemeToggle from "@/components/shared/theme-toggle";
import { farewellNavigation } from "@/lib/data/farewell";

export default function FarewellNavbar() {
  const { href, name } = farewellNavigation;

  return (
    <header className='absolute top-0 z-50 w-full text-black dark:text-white'>
      <div className='mx-auto flex items-center justify-between px-3 py-4 sm:px-2.5 md:px-4'>
        <div className='flex items-center gap-2.5 lg:gap-4 2xl:gap-6'>
          <NavLogo
            primary='Patricia Penisten:'
            secondary='The Farewell Tour'
            href='/'
            priority
          />
          <CustomAudioPlayer />
        </div>
        <nav className='flex items-center gap-2.5 lg:gap-4 2xl:gap-6'>
          <Link
            href={href}
            className='hover:text-primary relative flex cursor-pointer transition-colors sm:hidden'
          >
            <Home className='text-accent-foreground size-4' />
          </Link>
          <NavLink
            key={name}
            name={name}
            href={href}
            className='hidden sm:block'
          />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
