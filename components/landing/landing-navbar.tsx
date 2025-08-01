"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import NavLogo from "@/components/shared/nav-logo";
import ThemeToggle from "@/components/shared/theme-toggle";
import { landingNavigation } from "@/lib/data/landing";

export default function LandingNavbar() {
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const navElement = navRef.current;

      if (navElement) {
        if (window.scrollY > 120) {
          navElement.classList.add("scrolled");
        } else {
          navElement.classList.remove("scrolled");
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={navRef}
      id='landing-navbar'
      className='pointer-events-none fixed top-0 z-50 w-full opacity-0 transition-all'
    >
      <div className='mx-auto flex items-center justify-between p-4'>
        <NavLogo
          primary='Patricia Penisten:'
          secondary='A Life Remembered'
          href='/'
        />
        <div className='flex items-center gap-3 md:gap-4 lg:gap-5 2xl:gap-6'>
          <nav className='hidden sm:flex sm:items-center sm:gap-3.5 md:gap-6 lg:gap-8'>
            {landingNavigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className='group hover:text-primary relative cursor-pointer font-medium transition-colors sm:mb-0.5 sm:text-sm lg:text-base'
              >
                {link.name}
                <span className='sm:bg-primary absolute -bottom-0.5 left-0 hidden h-0.5 w-0 transition-all duration-300 group-hover:w-full sm:block'></span>
              </Link>
            ))}
          </nav>

          <nav className='flex sm:hidden'>
            <Link
              href='/farewell'
              className='group hover:text-primary relative cursor-pointer text-sm font-medium transition-colors'
            >
              Farewell Tour
              <span className='bg-primary absolute -bottom-0.5 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full'></span>
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
