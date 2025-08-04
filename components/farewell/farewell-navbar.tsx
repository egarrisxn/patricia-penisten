import Link from "next/link";
import { Home } from "lucide-react";
import NavLogo from "@/components/shared/nav-logo";
import NavLink from "@/components/shared/nav-link";
import CustomAudioPlayer from "@/components/shared/audio-player";
import ThemeButton from "@/components/shared/theme-button";
import { farewellNavigation } from "@/lib/data/farewell";

export default function FarewellNavbar() {
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
            href={farewellNavigation.href}
            className='hover:text-primary relative flex cursor-pointer transition-colors sm:hidden'
          >
            <Home className='text-accent-foreground size-4' />
          </Link>
          <NavLink
            key={farewellNavigation.name}
            name={farewellNavigation.name}
            href={farewellNavigation.href}
            className='hidden sm:block'
          />
          <ThemeButton />
        </nav>
      </div>
    </header>
  );
}
