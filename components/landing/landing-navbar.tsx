"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
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
        <div className='flex items-center'>
          <Link
            className='tracking-snug cursor-pointer text-lg font-bold lg:text-2xl'
            href='/'
          >
            Patricia G. Penisten
          </Link>
        </div>

        <div className='flex flex-row items-center sm:gap-6 lg:gap-8'>
          <nav className='hidden flex-row items-center sm:flex sm:gap-6 lg:gap-8'>
            {landingNavigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className='group hover:text-primary relative cursor-pointer text-sm font-medium transition-colors'
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
