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

// "use client";

// import { useEffect, useRef, useState } from "react";
// import NavLogo from "@/components/shared/nav-logo";
// import NavLink from "@/components/ui/nav-link";
// import ThemeButton from "@/components/shared/theme-button";
// import { landingNavigation, landingSingleNavigation } from "@/lib/data/landing";

// const SCROLL_THRESHOLD = 120;

// export default function LandingNavbar() {
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
//       id='landing-navbar'
//       className={`fixed top-0 z-100 w-full transition-all duration-300 ${
//         scrolled
//           ? "bg-card/90 text-foreground pointer-events-auto shadow-lg backdrop-blur-lg"
//           : "bg-transparent text-white"
//       }`}
//       aria-hidden={!scrolled}
//     >
//       <div className='mx-auto flex items-center justify-between px-3 py-4 sm:px-2.5 md:px-4'>
//         <NavLogo
//           primary='Patricia Penisten:'
//           secondary='A Life Remembered'
//           href='/'
//         />
//         <div className='flex items-center gap-2.5 lg:gap-4 2xl:gap-6'>
//           <nav className='hidden sm:flex sm:items-center sm:gap-2.5 md:gap-4 lg:gap-6'>
//             {landingNavigation.map((link) => (
//               <NavLink key={link.name} name={link.name} href={link.href} />
//             ))}
//           </nav>
//           <nav className='flex sm:hidden'>
//             <NavLink
//               key={landingSingleNavigation.name}
//               name={landingSingleNavigation.name}
//               href={landingSingleNavigation.href}
//             />
//           </nav>
//           <ThemeButton />
//         </div>
//       </div>
//     </header>
//   );
// }
