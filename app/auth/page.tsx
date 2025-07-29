import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import ThemeToggle from "@/components/shared/theme-toggle";
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
    <div className='grid min-h-dvh w-full grid-rows-[auto_1fr]'>
      <nav className='flex flex-row items-center justify-end p-4'>
        <ThemeToggle />
      </nav>
      <main className='mb-8 flex flex-col items-center justify-center p-4'>
        <AuthForm />
      </main>
    </div>
  );
}
