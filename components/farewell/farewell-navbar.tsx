import Link from "next/link";
import NavLogo from "@/components/shared/nav-logo";
import { Home } from "lucide-react";
import CustomAudioPlayer from "@/components/shared/audio-player";
import ThemeToggle from "@/components/shared/theme-toggle";
import { farewellNavigation } from "@/lib/data";

export default function FarewellNavbar() {
  return (
    <header className='absolute top-0 z-50 w-full text-black dark:text-white'>
      <div className='mx-auto flex flex-row items-center justify-between p-4'>
        <div className='flex flex-row items-center gap-3 md:gap-4 lg:gap-6'>
          <NavLogo
            primary='Patricia Penisten:'
            secondary='The Farewell Tour'
            href='/'
            priority
          />
          <CustomAudioPlayer />
        </div>
        <nav className='flex flex-row items-center gap-4 lg:gap-5 2xl:gap-6'>
          <Link
            href={farewellNavigation.href}
            className='hover:text-primary relative flex cursor-pointer transition-colors sm:hidden'
          >
            <Home className='text-accent-foreground size-4 sm:hidden' />
          </Link>
          <Link
            href={farewellNavigation.href}
            className='group hover:text-primary mb-0.5 hidden cursor-pointer font-medium transition-colors sm:relative sm:flex sm:text-sm lg:text-base'
          >
            <div className='hidden sm:block'>{farewellNavigation.name}</div>
            <span className='sm:bg-primary -bottom-0.5 left-0 hidden h-0.5 w-0 transition-all duration-300 group-hover:w-full sm:absolute sm:block'></span>
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
