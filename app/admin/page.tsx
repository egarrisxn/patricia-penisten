import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AdminDashboard from "@/components/admin/dashboard";
import AdminNavbar from "@/components/admin/navbar";

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth");
  }

  return (
    <div className='grid min-h-[100dvh] w-full max-w-screen grid-rows-[auto_1fr]'>
      <AdminNavbar />
      <AdminDashboard />
    </div>
  );
}
