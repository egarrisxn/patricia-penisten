import { Navbar, NavLogo } from "@/components/ui/navbar";
import { NavLinks } from "@/lib/types";

const adminNavigation: NavLinks[] = [
  { name: "Home Page", href: "/" },
  { name: "Farewell Tour", href: "/farewell" },
];

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
