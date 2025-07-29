import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/shared/theme-toggle";
import { adminNavigation } from "@/lib/data";

export default function AdminNavbar() {
  return (
    <header className='w-full bg-transparent text-black dark:text-white'>
      <div className='mx-auto flex flex-row items-center justify-between p-4'>
        <div className='flex flex-row items-center gap-1'>
          <Link className='cursor-pointer' href='/'>
            <Image
              src='/navbar-icon.svg'
              alt='Farewell Tour Page Logo'
              width={64}
              height={64}
              quality={100}
              className='size-9 lg:size-11'
            />
          </Link>
          <p className='text-accent-foreground font-serif leading-none font-semibold lg:text-lg'>
            Patricia Penisten:
            <br />
            The Admin Page
          </p>
        </div>
        <div className='flex flex-row items-center sm:gap-4 lg:gap-5 2xl:gap-6'>
          <nav className='hidden flex-row items-center sm:flex sm:gap-4 lg:gap-5 2xl:gap-6'>
            {adminNavigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className='group hover:text-primary relative mb-0.5 hidden cursor-pointer text-sm font-medium transition-colors sm:flex lg:text-base'
              >
                {link.name}
                <span className='bg-primary absolute -bottom-0.5 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full'></span>
              </Link>
            ))}
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
