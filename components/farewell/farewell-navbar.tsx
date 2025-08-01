import Link from "next/link";
import { Home } from "lucide-react";
import NavLogo from "@/components/shared/nav-logo";
import CustomAudioPlayer from "@/components/shared/audio-player";
import ThemeToggle from "@/components/shared/theme-toggle";
import { farewellNavigation } from "@/lib/data/farewell";

export default function FarewellNavbar() {
  const { href, name } = farewellNavigation;

  return (
    <header className='absolute top-0 z-50 w-full text-black dark:text-white'>
      <div className='mx-auto flex items-center justify-between p-4'>
        <div className='flex items-center gap-3 md:gap-4 lg:gap-5 xl:gap-6'>
          <NavLogo
            primary='Patricia Penisten:'
            secondary='The Farewell Tour'
            href='/'
            priority
          />
          <CustomAudioPlayer />
        </div>
        <nav className='flex items-center gap-3 md:gap-4 lg:gap-5 xl:gap-6'>
          <Link
            href={href}
            className='hover:text-primary relative flex cursor-pointer transition-colors sm:hidden'
          >
            <Home className='text-accent-foreground size-4' />
          </Link>
          <Link
            href={href}
            className='group hover:text-primary hidden cursor-pointer font-medium transition-colors sm:relative sm:flex sm:text-sm lg:text-base'
          >
            <div className='hidden sm:block'>{name}</div>
            <span className='sm:bg-primary -bottom-0.5 left-0 hidden h-0.5 w-0 transition-all duration-300 group-hover:w-full sm:absolute sm:block'></span>
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
