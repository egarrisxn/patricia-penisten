import { Navbar, NavLink, NavLogo } from "@/components/ui/navbar";

import { NavLinks } from "@/lib/types";

const landingNavigation: NavLinks[] = [
  { name: "About", href: "#landing-about" },
  { name: "Timeline", href: "#landing-timeline" },
  { name: "Photo Gallery", href: "#landing-photogallery" },
  { name: "Guestbook", href: "#landing-guestbook" },
  { name: "Farewell Tour", href: "/farewell" },
];

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
      scrolledClasses='bg-card/90 text-foreground pointer-events-auto shadow-lg backdrop-blur-lg'
    />
  );
}
