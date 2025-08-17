import { Navbar, NavLink, NavLogo } from "@/components/ui/navbar";
import { landingNavigation } from "@/lib/data/landing";

export default function LandingNavbar() {
  return (
    <Navbar
      logo={
        <NavLogo
          primary='Patricia Penisten:'
          secondary='A Life Remembered'
          priority={false}
        />
      }
      extraRight={<NavLink href='/farewell' name='Farewell Tour' />}
      navLinks={landingNavigation}
      transparentClasses='bg-transparent text-white'
      scrolledClasses='bg-card text-foreground pointer-events-auto shadow-lg backdrop-blur-lg'
    />
  );
}
