"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import ScrollToSectionButton from "@/components/landing/scroll-to-section";
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
      <div className='mx-auto flex flex-row items-center justify-between px-1.5 py-3 sm:py-4 lg:px-4.5'>
        <section className='pl-1.5 lg:pl-1'>
          <Link
            className='tracking-snug text-lg font-bold lg:text-2xl'
            href='/'
          >
            Memories of Patricia
          </Link>
        </section>
        <section className='flex-row items-center sm:flex sm:gap-0.5 lg:gap-3'>
          <nav className='hidden flex-row items-center sm:flex sm:gap-0.5 lg:gap-3'>
            {landingNavigation.map((item) => (
              <ScrollToSectionButton key={item.name} item={item} />
            ))}
          </nav>
          <ThemeToggle />
        </section>
      </div>
    </header>
  );
}
