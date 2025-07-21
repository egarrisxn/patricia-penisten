"use client";

import { Button } from "@/components/ui/button";

interface ScrollToSectionButtonProps {
  item: {
    name: string;
    href: string;
  };
}

export default function ScrollToSectionButton({
  item,
}: ScrollToSectionButtonProps) {
  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView();
  };

  return (
    <Button
      variant='ghost'
      className='cursor-pointer'
      onClick={() => scrollToSection(item.href)}
    >
      {item.name}
    </Button>
  );
}
