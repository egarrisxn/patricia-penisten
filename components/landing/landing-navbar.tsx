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
      <div className='5xl:py-6 mx-auto flex flex-row items-center justify-between p-4'>
        <div>
          <Link
            className='5xl:gap-2 xs:gap-1.5 flex cursor-pointer flex-row items-center gap-1'
            href='/'
          >
            <Image
              src='/logo.svg'
              alt='Farewell Tour Page Logo'
              width={64}
              height={64}
              quality={100}
              className='5xl:size-12 size-9 lg:size-11'
            />

            <p className='5xl:text-3xl text-accent-foreground xs:tracking-tight font-serif leading-none font-semibold tracking-tighter lg:pb-[1px] lg:text-lg'>
              Patricia Penisten:
              <br />A Life Remembered
            </p>
          </Link>
        </div>
        <div className='5xl:gap-8 flex flex-row items-center sm:gap-3.5 md:gap-4 lg:gap-6'>
          <nav className='5xl:gap-10 hidden flex-row items-center sm:flex sm:gap-3.5 md:gap-6 lg:gap-8'>
            {landingNavigation.map((link) => (
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
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
