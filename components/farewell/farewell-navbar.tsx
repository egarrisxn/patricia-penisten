import Link from "next/link";
import Image from "next/image";
import AudioPlayer from "@/components/shared/audio-player";
import ThemeToggle from "@/components/shared/theme-toggle";

export default function FarewellNavbar() {
  return (
    <header className='absolute top-0 z-50 w-full text-black dark:text-white'>
      <div className='5xl:py-6 mx-auto flex flex-row items-center justify-between p-4'>
        <div className='5xl:gap-8 flex flex-row items-center gap-3.5 md:gap-4 lg:gap-6'>
          <Link
            className='5xl:gap-2 xs:gap-1.5 flex cursor-pointer flex-row items-center gap-1'
            href='/'
          >
            <Image
              src='/logo.svg'
              alt='Farewell Tour Page Logo'
              width={64}
              height={64}
              quality={100}
              priority
              className='5xl:size-12 size-9 lg:size-11'
            />
            <p className='5xl:text-3xl text-accent-foreground font-serif leading-none font-semibold tracking-tight lg:pb-[1px] lg:text-lg'>
              Patricia Penisten:
              <br />
              The Farewell Tour
            </p>
          </Link>
          <AudioPlayer />
        </div>
        <nav className='5xl:gap-8 flex flex-row items-center sm:gap-3.5 md:gap-4 lg:gap-6'>
          <Link
            href='/'
            className='group hover:text-primary 5xl:text-lg relative hidden cursor-pointer text-sm font-medium tracking-tight transition-colors sm:block md:tracking-normal lg:text-base'
          >
            Memorial Page
            <span className='bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full'></span>
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
