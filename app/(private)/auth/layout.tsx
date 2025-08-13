import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AuthNavbar from "@/components/auth/auth-navbar";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/admin");
  }

  return (
    <div className='grid min-h-dvh w-full grid-rows-[auto_1fr]'>
      <AuthNavbar />
      <main>{children}</main>
    </div>
  );
}
