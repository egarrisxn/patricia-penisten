"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "motion/react";
import { Sun, Moon, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark" | "system";
type ThemeToggleSize = "sm" | "md" | "lg";

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
  const [isMounted, setIsMounted] = React.useState(false);

  const sizeClasses = {
    sm: "h-8 px-2 text-xs",
    md: "size-9 md:size-10",
    lg: "h-12 px-4 text-base",
  };

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 20,
  };

  const themeIcons = {
    light: Sun,
    dark: Moon,
    system: Monitor,
  };

  const themeConfigs = {
    light: { label: "Light", icon: Sun },
    dark: { label: "Dark", icon: Moon },
    system: { label: "System", icon: Monitor },
  };

  const safeTheme: Theme =
    theme && themes.includes(theme as Theme) ? (theme as Theme) : "light";

  const nextTheme = themes[(themes.indexOf(safeTheme) + 1) % themes.length];

  const Icon = themeIcons[safeTheme];

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div
        className={cn(
          "inline-flex animate-pulse items-center justify-center rounded-lg border border-border bg-card",
          sizeClasses[size],
          className
        )}
        role='button'
        aria-label='Loading theme toggle'
      />
    );
  }

  return (
    <motion.button
      onClick={() => setTheme(nextTheme)}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center rounded-lg border border-border bg-card text-foreground transition-all duration-200 hover:scale-105 hover:bg-muted active:scale-95",
        sizeClasses[size],
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${themeConfigs[nextTheme].label} theme`}
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
