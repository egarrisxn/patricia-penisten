import MainNavbar from "@/components/shared/main-navbar";
import NavLink from "@/components/shared/nav-link";
import NavLogo from "@/components/shared/nav-logo";

export default function LandingNavbar() {
  return (
    <MainNavbar
      logo={
        <NavLogo
          primary='Patricia Penisten:'
          secondary='A Life Remembered'
          priority={false}
        />
      }
      extraRight={<NavLink href='/farewell' name='Farewell Tour' />}
      navLinks={[
        { name: "About", href: "#landing-about" },
        { name: "Timeline", href: "#landing-timeline" },
        { name: "Photo Gallery", href: "#landing-photogallery" },
        { name: "Guestbook", href: "#landing-guestbook" },
        { name: "Farewell Tour", href: "/farewell" },
      ]}
      transparentClasses='bg-transparent text-white'
      scrolledClasses='bg-card/90 text-foreground pointer-events-auto shadow-lg backdrop-blur-lg'
    />
  );
}
