import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AdminNavbar from "@/components/admin/admin-navbar";
import AdminFooter from "@/components/admin/admin-footer";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  return (
    <div className='grid min-h-dvh w-full grid-rows-[auto_1fr_auto]'>
      <AdminNavbar />
      <main>{children}</main>
      <AdminFooter />
    </div>
  );
}
