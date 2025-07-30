"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonStarIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant='ghost'
        size='icon'
        className='m-0 size-fit p-0'
        aria-label='Toggle theme'
      />
    );
  }

  return (
    <Button
      variant='ghost'
      size='icon'
      className='m-0 size-fit cursor-pointer p-0 hover:bg-transparent dark:hover:bg-transparent'
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className='fill-primary/50 text-primary size-5 lg:size-5.5' />
      ) : (
        <MoonStarIcon className='fill-accent-foreground/70 text-accent-foreground size-5 lg:size-5.5' />
      )}
    </Button>
  );
}
