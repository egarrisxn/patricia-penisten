import Link from "next/link";
import Image from "next/image";
import LogoutButton from "@/components/admin/logout";
import ThemeToggle from "@/components/shared/theme-toggle";
import { adminNavigation } from "@/lib/data";

export default function AdminNavbar() {
  return (
    <header className='absolute top-0 z-50 w-full bg-transparent text-black dark:text-white'>
      <div className='5xl:py-6 mx-auto flex flex-row items-center justify-between p-4'>
        <div className='5xl:gap-2 xs:gap-1.5 flex flex-row items-center gap-1'>
          <Link className='r cursor-pointer' href='/'>
            <Image
              src='/logo.svg'
              alt='Farewell Tour Page Logo'
              width={64}
              height={64}
              quality={100}
              className='5xl:size-12 size-9 lg:size-11'
            />
          </Link>
          <p className='5xl:text-3xl text-accent-foreground xs:tracking-tight font-serif leading-none font-semibold tracking-tighter lg:pb-[1px] lg:text-lg'>
            Patricia Penisten:
            <br />
            The Admin Page
          </p>
        </div>
        <div className='5xl:gap-8 flex flex-row items-center sm:gap-3.5 md:gap-4 lg:gap-6'>
          <nav className='5xl:gap-10 hidden flex-row items-center sm:flex sm:gap-3.5 md:gap-6 lg:gap-8'>
            {adminNavigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className='group hover:text-primary 5xl:text-lg relative cursor-pointer text-sm font-medium tracking-tight transition-colors md:tracking-normal lg:text-base'
              >
                {link.name}
                <span className='bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full'></span>
              </Link>
            ))}
          </nav>
          <div className='5xl:gap-8 flex flex-row items-center gap-2 sm:gap-4 lg:gap-6'>
            <LogoutButton />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
