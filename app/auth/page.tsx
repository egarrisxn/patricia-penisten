import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AuthNavbar from "@/components/auth/auth-navbar";
import AuthForm from "@/components/auth/auth-form";

export default async function AuthPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/admin");
  }

  return (
    <div>
      <AuthNavbar />

      <main className='grid min-h-dvh w-full place-items-center'>
        <AuthForm />
      </main>
    </div>
  );
}
