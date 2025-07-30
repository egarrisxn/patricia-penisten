"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/shared/theme-toggle";
import { landingNavigation } from "@/lib/data";

export default function LandingNavbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const toggleVisibility = () => {
      if (!navRef.current) return;
      if (window.scrollY > 120) {
        navRef.current.classList.add("scrolled");
      } else {
        navRef.current.classList.remove("scrolled");
      }
    };
    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <header
      ref={navRef}
      id='landing-header'
      className='pointer-events-none fixed top-0 z-50 w-full opacity-0 transition-all'
    >
      <div className='mx-auto flex flex-row items-center justify-between p-4'>
        <Link
          className='flex cursor-pointer flex-row items-center gap-1'
          href='/'
        >
          <Image
            src='/navbar-icon.svg'
            alt='Farewell Tour Page Logo'
            width={64}
            height={64}
            quality={100}
            className='size-9 lg:size-11'
          />

          <p className='text-accent-foreground font-serif leading-none font-semibold lg:text-lg'>
            Patricia Penisten:
            <br />A Life Remembered
          </p>
        </Link>

        <div className='flex flex-row items-center gap-4 lg:gap-5 2xl:gap-6'>
          <nav className='flex items-center sm:hidden'>
            <Link
              href='/farewell'
              className='group hover:text-primary relative mb-0.5 flex cursor-pointer text-sm font-medium transition-colors sm:hidden'
            >
              Farewell Tour
              <span className='bg-primary absolute -bottom-0.5 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full sm:hidden'></span>
            </Link>
          </nav>
          <nav className='hidden sm:flex sm:flex-row sm:items-center sm:gap-3.5 md:gap-6 lg:gap-8'>
            {landingNavigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className='group hover:text-primary hidden cursor-pointer font-medium transition-colors sm:relative sm:mb-0.5 sm:flex sm:text-sm lg:text-base'
              >
                {link.name}
                <span className='sm:bg-primary -bottom-0.5 left-0 hidden h-0.5 w-0 transition-all duration-300 group-hover:w-full sm:absolute sm:block'></span>
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
