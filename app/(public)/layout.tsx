import type { ReactNode } from "react";
import ScrollUp from "@/components/shared/scroll-up";
import Footer from "@/components/shared/footer";

export default function PubliclLayout({ children }: { children: ReactNode }) {
  return (
    <div className='mx-auto grid w-full overflow-x-hidden'>
      <main>{children}</main>
      <ScrollUp />
      <Footer />
    </div>
  );
}
