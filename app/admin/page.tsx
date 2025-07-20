import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import SharedNavbar from "@/components/shared/navbar";
import AdminDashboard from "@/components/admin/dashboard";

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth");
  }

  return (
    <main className='grid min-h-dvh w-full grid-rows-[auto_1fr]'>
      <SharedNavbar />
      <AdminDashboard />
    </main>
  );
}
