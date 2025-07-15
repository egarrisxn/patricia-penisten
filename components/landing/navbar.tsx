"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Life Story", href: "#lifestory" },
  { name: "Photo Gallery", href: "#photos" },
  { name: "Guestbook", href: "#guestbook" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all ${isScrolled ? "bg-background/95 text-black shadow-lg backdrop-blur-sm dark:text-white" : "bg-transparent text-white"}`}
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between py-4'>
          <div className='text-2xl font-bold'>Memories of Patricia</div>
          <div className='flex md:gap-1 lg:gap-4'>
            <div className='hidden gap-1 md:flex lg:gap-4'>
              {navigation.map((item) => (
                <Button
                  variant='ghost'
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.name}
                </Button>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
