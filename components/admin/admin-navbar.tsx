import NavLogo from "@/components/shared/nav-logo";
import NavLink from "@/components/shared/nav-link";
import ThemeButton from "@/components/shared/theme-button";
import { adminNavigation } from "@/lib/data/admin";

export default function AdminNavbar() {
  return (
    <header className='w-full text-black dark:text-white'>
      <div className='mx-auto flex flex-row items-center justify-between px-3 py-4 sm:px-2.5 md:px-4'>
        <NavLogo
          primary='Patricia Penisten:'
          secondary='Admin Page'
          href='/'
          priority
        />
        <div className='flex items-center gap-2.5 lg:gap-4 2xl:gap-6'>
          <nav className='hidden sm:flex sm:items-center sm:gap-2.5 md:gap-4 lg:gap-6'>
            {adminNavigation.map((link) => (
              <NavLink key={link.name} name={link.name} href={link.href} />
            ))}
          </nav>
          <ThemeButton />
        </div>
      </div>
    </header>
  );
}
