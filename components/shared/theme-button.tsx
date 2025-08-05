"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { themeIcons, themeConfigs } from "@/lib/data/themes";
import { Theme, ThemeToggleSize } from "@/lib/types";

interface ThemeToggleProps {
  size?: ThemeToggleSize;
  showLabel?: boolean;
  themes?: Theme[];
  className?: string;
}

export default function ThemeButton({
  size = "md",
  showLabel = false,
  themes = ["light", "dark", "system"],
  className,
}: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const sizeClasses = {
    sm: "h-8 px-2 text-xs",
    md: "h-10 px-3 text-sm",
    lg: "h-12 px-4 text-base",
  };

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 20,
  };

  if (!isMounted) return null;

  const safeTheme: Theme =
    theme && themes.includes(theme as Theme) ? (theme as Theme) : "light";

  const nextTheme = themes[(themes.indexOf(safeTheme) + 1) % themes.length];

  const Icon = themeIcons[safeTheme];

  return (
    <motion.button
      onClick={() => setTheme(nextTheme)}
      className={cn(
        "border-border bg-card text-foreground hover:bg-muted inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border transition-all duration-200 hover:scale-105 active:scale-95",
        sizeClasses[size],
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode='wait'>
        <motion.div
          key={safeTheme}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Icon size={iconSizes[size]} />
        </motion.div>
      </AnimatePresence>
      {showLabel && (
        <span className='font-medium'>{themeConfigs[safeTheme].label}</span>
      )}
    </motion.button>
  );
}
