import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/shared/theme-toggle";

export default function SharedNavbar() {
  return (
    <header className='bg-background/95 w-full text-black shadow-sm backdrop-blur-sm dark:text-white'>
      <div className='mx-auto flex flex-row items-center justify-between px-1.5 py-3 sm:py-4 lg:px-4.5'>
        <section className='pl-1.5 lg:pl-1'>
          <Link
            className='tracking-snug text-lg font-bold lg:text-2xl'
            href='/'
          >
            Memories of Patricia
          </Link>
        </section>
        <section>
          <nav className='flex-row items-center sm:flex sm:gap-0.5 lg:gap-3'>
            <Link href='/' className='hidden items-center sm:flex'>
              <Button variant='ghost'>Home</Button>
            </Link>
            <ThemeToggle />
          </nav>
        </section>
      </div>
    </header>
  );
}
