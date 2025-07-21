"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/shared/theme-toggle";
import { landingNavigation } from "@/lib/data";

export default function LandingNavbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      if (window.scrollY > 50) {
        navRef.current.classList.add("scrolled");
      } else {
        navRef.current.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={navRef}
      className='fixed top-0 z-50 w-full bg-transparent text-white transition-all'
    >
      <div className='mx-auto flex flex-row items-center justify-between px-1 py-3 lg:px-4'>
        <div className='pl-2 lg:pl-1'>
          <Link
            className='tracking-snug cursor-pointer text-lg font-bold lg:text-2xl'
            href='/'
          >
            Memories of Patricia
          </Link>
        </div>

        <div className='xs:gap-0.5 flex flex-row items-center sm:gap-2 lg:gap-4'>
          <nav className='xs:flex xs:gap-2.5 hidden flex-row items-center sm:gap-4 lg:gap-6'>
            {landingNavigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className='group hover:text-primary relative cursor-pointer text-xs font-medium transition-colors sm:text-sm'
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
