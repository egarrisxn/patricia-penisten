import type { ReactNode } from "react";
import ScrollUp from "@/components/shared/scroll-up";
import Footer from "@/components/ui/footer";

export default function PubliclLayout({ children }: { children: ReactNode }) {
  return (
    <div className='mx-auto grid w-full overflow-x-hidden'>
      <main className='to-background bg-radial from-blue-100 from-40% dark:from-slate-800'>
        {children}
      </main>
      <ScrollUp />
      <Footer
        className='bg-card/90 border-border/30 w-full border-t-2'
        isMemorial={true}
      />
    </div>
  );
}
