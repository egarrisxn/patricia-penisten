import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import ThemeButton from "@/components/ui/theme-button";
import AuthForm from "@/components/auth/auth-form";
import Footer from "@/components/ui/footer";

export default async function AuthPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/admin");
  }

  return (
    <>
      <header className="flex w-full flex-row items-center justify-end p-4">
        <ThemeButton />
      </header>
      <main className="flex flex-col items-center justify-center p-4">
        <AuthForm />
      </main>
      <Footer showCredit={true} />
    </>
  );
}
