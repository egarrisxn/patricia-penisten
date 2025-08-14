import { Navbar, NavLogo } from "@/components/ui/navbar";
import { adminNavigation } from "@/lib/data/admin";

export default function AdminNavbar() {
  return (
    <Navbar
      logo={
        <NavLogo
          primary='Patricia Penisten:'
          secondary='Admin Page'
          href='/'
          priority
        />
      }
      navLinks={adminNavigation}
      transparentClasses='z-50'
      isStatic={true}
    />
  );
}
