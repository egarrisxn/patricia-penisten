import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ThemeToggle } from "@/components/theme-toggle";
import AuthForm from "@/components/auth/form";

export default async function AuthPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/admin");
  }

  return (
    <div className='grid min-h-[100dvh] w-full max-w-screen place-items-center'>
      <div className='absolute top-4 right-4 z-10'>
        <ThemeToggle />
      </div>
      <AuthForm />
    </div>
  );
}
