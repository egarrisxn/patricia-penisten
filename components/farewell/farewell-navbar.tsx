import { Navbar, NavLogo } from "@/components/ui/navbar";
import CustomAudioPlayer from "@/components/shared/audio-player";

export default function FarewellNavbar() {
  return (
    <Navbar
      logo={
        <NavLogo
          primary='Patricia Penisten:'
          secondary='The Farewell Tour'
          priority
        />
      }
      extraLeft={<CustomAudioPlayer />}
      navLinks={[{ name: "Memorial Page", href: "/" }]}
      transparentClasses='bg-transparent'
      scrolledClasses='bg-card text-foreground pointer-events-auto shadow-lg backdrop-blur-lg'
    />
  );
}
