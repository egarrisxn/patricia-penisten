import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import SharedNavbar from "@/components/shared/navbar";
import AdminDashboard from "@/components/admin/admin-dashboard";
import AdminFooter from "@/components/admin/admin-footer";

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
      <SharedNavbar />

      <main>
        <section id='dashboard' className='container mx-auto px-4 py-8'>
          <AdminDashboard />
        </section>
      </main>

      <AdminFooter />
    </div>
  );
}
