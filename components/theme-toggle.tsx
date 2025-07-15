"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button variant='ghost' size='icon' />;
  }

  return (
    <Button
      variant='ghost'
      size='icon'
      className='hover:bg-transparent dark:hover:bg-transparent'
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className='size-4 text-amber-300 sm:size-6' />
      ) : (
        <MoonIcon className='size-4 text-blue-800 sm:size-6' />
      )}
    </Button>
  );
}
