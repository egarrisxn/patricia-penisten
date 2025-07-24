import Link from "next/link";
import Image from "next/image";
import AudioPlayer from "@/components/shared/audio-player";
import ThemeToggle from "@/components/shared/theme-toggle";

export default function FarewellNavbar() {
  return (
    <header className='w-full text-black dark:text-white'>
      <div className='mx-auto flex flex-row items-center justify-between p-4'>
        <div className='flex flex-row items-center gap-3 md:gap-4 lg:gap-6'>
          <Link
            className='flex cursor-pointer flex-row items-center gap-1.5'
            href='/'
          >
            <Image
              src='/logo.svg'
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
          <AudioPlayer />
        </div>
        <nav className='flex flex-row items-center sm:gap-4 lg:gap-5 2xl:gap-6'>
          <Link
            href='/'
            className='group hover:text-primary relative mb-0.5 hidden cursor-pointer text-sm font-medium transition-colors sm:flex lg:text-base'
          >
            Memorial Page
            <span className='bg-primary absolute -bottom-0.5 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full'></span>
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
