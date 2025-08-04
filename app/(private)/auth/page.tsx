import AuthNavbar from "@/components/auth/auth-navbar";
import AuthForm from "@/components/auth/auth-form";

export default function AuthPage() {
  return (
    <div className='grid min-h-dvh w-full grid-rows-[auto_1fr_auto]'>
      <AuthNavbar />
      <section className='mb-8 flex flex-col items-center justify-center p-4'>
        <AuthForm />
      </section>
    </div>
  );
}
