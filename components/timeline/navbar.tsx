import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function TimelineNavbar() {
  return (
    <nav className='absolute top-0 z-50 w-full bg-transparent text-black shadow-lg backdrop-blur-sm dark:text-white'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between py-4'>
          <Link className='text-2xl font-bold' href='/'>
            Memories of Patricia
          </Link>

          <div className='flex md:gap-1 lg:gap-4'>
            <Link href='/'>
              <Button variant='ghost'>Memorial Page</Button>
            </Link>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
