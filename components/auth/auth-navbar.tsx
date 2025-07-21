import ThemeToggle from "@/components/shared/theme-toggle";

export default function AuthNavbar() {
  return (
    <nav className='absolute top-4 right-4 z-10'>
      <ThemeToggle />
    </nav>
  );
}
