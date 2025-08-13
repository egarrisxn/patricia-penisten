import MainNavbar from "@/components/shared/main-navbar";
import NavLogo from "@/components/shared/nav-logo";
import CustomAudioPlayer from "@/components/shared/audio-player";

export default function FarewellNavbar() {
  return (
    <MainNavbar
      logo={
        <NavLogo
          primary='Patricia Penisten:'
          secondary='The Farewell Tour'
          priority={true}
        />
      }
      extraLeft={<CustomAudioPlayer />}
      navLinks={[{ name: "Memorial Page", href: "/" }]}
      transparentClasses='bg-transparent'
      scrolledClasses='bg-card/90 text-foreground pointer-events-auto shadow-lg backdrop-blur-lg'
    />
  );
}

// "use client";

// import { useEffect, useRef, useState } from "react";
// import NavLogo from "@/components/shared/nav-logo";
// import NavLink from "@/components/shared/nav-link";
// import CustomAudioPlayer from "@/components/shared/audio-player";
// import ThemeButton from "@/components/shared/theme-button";
// import { farewellNavigation } from "@/lib/data/farewell";

// const SCROLL_THRESHOLD = 120;

// export default function FarewellNavbar() {
//   const navRef = useRef<HTMLElement | null>(null);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     let ticking = false;

//     const update = () => {
//       const y = window.scrollY;
//       const isScrolled = y > SCROLL_THRESHOLD;
//       setScrolled(isScrolled);
//       ticking = false;
//     };

//     const handleScroll = () => {
//       if (!ticking) {
//         ticking = true;
//         window.requestAnimationFrame(update);
//       }
//     };

//     update();
//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header
//       ref={navRef}
//       id='farewell-navbar'
//       className={`fixed top-0 z-100 w-full transition-all duration-300 ${
//         scrolled
//           ? "bg-card/90 text-foreground pointer-events-auto shadow-lg backdrop-blur-lg"
//           : "bg-transparent"
//       }`}
//       aria-hidden={!scrolled}
//     >
//       <div className='mx-auto flex items-center justify-between px-3 py-4 sm:px-2.5 md:px-4'>
//         <div className='flex items-center gap-2.5 lg:gap-4 2xl:gap-6'>
//           <NavLogo
//             primary='Patricia Penisten:'
//             secondary='The Farewell Tour'
//             href='/'
//             priority
//           />
//           <CustomAudioPlayer />
//         </div>
//         <div className='flex items-center gap-2.5 lg:gap-4 2xl:gap-6'>
//           <nav className='hidden sm:block'>
//             <NavLink
//               key={farewellNavigation.name}
//               name={farewellNavigation.name}
//               href={farewellNavigation.href}
//             />
//           </nav>
//           <ThemeButton />
//         </div>
//       </div>
//     </header>
//   );
// }
