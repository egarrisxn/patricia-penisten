import type { ReactNode } from "react";
import Footer from "@/components/ui/footer";

export default function PubliclLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto grid w-full overflow-x-hidden">
      <main className="bg-radial from-blue-100 from-40% to-background dark:from-slate-800">
        {children}
      </main>

      <Footer
        className="w-full border-t-2 border-border/30 bg-card"
        isMemorial={true}
      />
    </div>
  );
}
