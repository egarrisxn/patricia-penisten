import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AdminNavbar from "@/components/admin/admin-navbar";
import Dashboard from "@/components/admin/dashboard";
import LogoutButton from "@/components/admin/logout";

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth");
  }

  return (
    <div className='grid min-h-dvh w-full grid-rows-[auto_1fr_auto]'>
      <AdminNavbar />
      <main className='p-4'>
        <Dashboard />
      </main>
      <footer className='mx-auto flex w-full items-center justify-center p-4 md:items-end md:justify-end'>
        <LogoutButton />
      </footer>
    </div>
  );
}
