import type { ReactNode } from "react";

export default function PrivatelLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-dvh w-full grid-rows-[auto_1fr_auto]">
      {children}
    </div>
  );
}
