import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";

export default function TimelineNavbar() {
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
