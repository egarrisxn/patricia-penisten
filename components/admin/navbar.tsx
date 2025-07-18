import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";
import LogoutButton from "@/components/admin/logout";

export default function AdminNavbar() {
  return (
    <header className='bg-background w-full border-b shadow-sm'>
      <div className='mx-auto flex flex-row items-center justify-between p-4 lg:px-6'>
        <section>
          <Link
            className='tracking-snug text-lg font-bold lg:text-2xl'
            href='/'
          >
            Memories of Patricia
          </Link>
        </section>
        <section>
          <nav className='flex flex-row items-center gap-0.5 lg:gap-3'>
            <Link href='/' className='hidden items-center sm:flex'>
              <Button variant='ghost'>Home</Button>
            </Link>
            <LogoutButton />
            <ThemeToggle />
          </nav>
        </section>
      </div>
    </header>
  );
}
