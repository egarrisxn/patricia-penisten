import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/shared/theme-toggle";

export default function SharedNavbar() {
  return (
    <header className='absolute top-0 z-50 w-full bg-transparent text-black dark:text-white'>
      <div className='mx-auto flex flex-row items-center justify-between p-4'>
        <div className='flex items-center'>
          <Link className='max-h-8 w-auto cursor-pointer' href='/'>
            <Image
              src='/logo.svg'
              alt='Farewell Tour Page Logo'
              width={32}
              height={32}
              className='size-8 object-cover'
            />
          </Link>
        </div>
        <div className='flex flex-row items-center gap-4 sm:gap-6 lg:gap-8'>
          <nav className='flex items-center'>
            <Link
              href='/'
              className='group hover:text-primary relative cursor-pointer text-sm font-medium transition-colors'
            >
              Memorial Page
              <span className='bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full'></span>
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
