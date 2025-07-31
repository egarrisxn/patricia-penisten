import Link from "next/link";
import Image from "next/image";
import { Home } from "lucide-react";
import CustomAudioPlayer from "@/components/shared/audio-player";
import ThemeToggle from "@/components/shared/theme-toggle";

export default function FarewellNavbar() {
  return (
    <header className='absolute top-0 z-50 w-full text-black dark:text-white'>
      <div className='mx-auto flex flex-row items-center justify-between p-4'>
        <div className='flex flex-row items-center gap-3 md:gap-4 lg:gap-6'>
          <Link
            className='flex cursor-pointer flex-row items-center gap-1.5'
            href='/'
          >
            <Image
              src='/navbar-icon.svg'
              alt='Farewell Tour Page Logo'
              width={64}
              height={64}
              quality={100}
              priority
              className='size-9 lg:size-11'
            />
            <p className='text-accent-foreground font-serif leading-none font-semibold lg:text-lg'>
              Patricia Penisten:
              <br />
              The Farewell Tour
            </p>
          </Link>
          <CustomAudioPlayer />
        </div>
        <nav className='flex flex-row items-center gap-4 lg:gap-5 2xl:gap-6'>
          <Link
            href='/'
            className='hover:text-primary relative flex cursor-pointer transition-colors sm:hidden'
          >
            <Home className='text-accent-foreground size-4 sm:hidden' />
          </Link>
          <Link
            href='/'
            className='group hover:text-primary mb-0.5 hidden cursor-pointer font-medium transition-colors sm:relative sm:flex sm:text-sm lg:text-base'
          >
            <div className='hidden sm:block'> Memorial Page</div>
            <span className='sm:bg-primary -bottom-0.5 left-0 hidden h-0.5 w-0 transition-all duration-300 group-hover:w-full sm:absolute sm:block'></span>
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
