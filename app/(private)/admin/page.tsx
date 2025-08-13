import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AdminNavbar from "@/components/admin/admin-navbar";
import AdminDashboard from "@/components/admin/admin-dashboard";
import Footer from "@/components/ui/footer";
import Logout from "@/components/admin/logout";

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  return (
    <>
      <AdminNavbar />
      <main>
        <AdminDashboard />
      </main>
      <Footer>
        <Logout />
      </Footer>
    </>
  );
}
