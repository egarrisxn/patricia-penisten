import Link from "next/link";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";
import LogoutButton from "@/components/admin/logout";

export default function AdminNavbar() {
  return (
    <header className='bshadow-sm w-full border-b'>
      <div className='mx-auto flex flex-row items-center justify-between p-4 lg:px-6'>
        <section>
          <Link
            className='tracking-snug flex flex-row items-center gap-3 text-lg font-bold lg:text-2xl 2xl:text-3xl'
            href='/admin'
          >
            <Shield className='size-8 text-blue-600' />
            <span>Admin Dashboard</span>
          </Link>
        </section>
        <section className='flex lg:gap-3 2xl:gap-4'>
          <nav className='flex items-center md:gap-1 lg:gap-4'>
            <Link href='/'>
              <Button variant='ghost'>Home</Button>
            </Link>
            <LogoutButton />
          </nav>
          <ThemeToggle />
        </section>
      </div>
    </header>
  );
}
