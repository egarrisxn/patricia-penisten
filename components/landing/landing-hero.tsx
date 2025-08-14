import Image from "next/image";
import * as motion from "motion/react-client";
import { PhotoFlip } from "@/components/ui/photo-flip";
import ScrollDown from "@/components/shared/scroll-down";

import { LandingHeroData } from "@/lib/types";

const landingHeroData: LandingHeroData = {
  src: "/bg.avif",
  title: "Patricia G. Penisten",
  body: "December 22nd, 1935 - June 5th, 2025",
};

export default function LandingHero() {
  return (
    <>
      <div className='absolute inset-0 z-10 min-h-screen w-full'>
        <Image
          src={landingHeroData.src}
          alt="Background of Patricia Penisten's memorial page"
          fill
          priority
          sizes='100vw'
          className='object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90 dark:from-black/70 dark:via-black/80 dark:to-black/90' />
      </div>

      <div className='grid min-h-screen grid-rows-[1fr_auto] px-4'>
        <div className='z-20 flex flex-col items-center justify-center gap-6'>
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <PhotoFlip className='max-w-xs lg:max-w-lg' />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='text-center'
          >
            <h1 className='text-accent-foreground mb-2 font-serif text-4xl font-bold tracking-tight sm:text-5xl xl:text-[3.25rem]'>
              {landingHeroData.title}
            </h1>

            <h2 className='mb-6 font-normal text-white/90 sm:text-lg xl:text-[1.2rem] xl:leading-[1.45]'>
              <time dateTime='1935-12-22'>December 22nd, 1935</time> -{" "}
              <time dateTime='2025-06-05'>June 5th, 2025</time>
            </h2>

            <p className='mx-auto w-full max-w-64 text-xl leading-tight text-white sm:max-w-80 sm:text-2xl xl:max-w-96 xl:text-[1.85rem]'>
              Beloved{" "}
              <span className='text-primary font-semibold'>Teacher</span>,{" "}
              <span className='text-primary font-semibold'>Mother</span>,{" "}
              <span className='text-primary font-semibold'>Grandmother</span>, &{" "}
              <span className='text-primary font-semibold'>Wife</span>.
            </p>
          </motion.div>
        </div>

        {/* Scroll Down */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='z-20 mx-auto pb-8'
        >
          <ScrollDown targetId='landing-about' />
        </motion.div>
      </div>
    </>
  );
}

// import Image from "next/image";
// import * as motion from "motion/react-client";
// import { PhotoFlip } from "@/components/ui/photo-flip";
// import ScrollDown from "@/components/shared/scroll-down";
// import { CONTAINER_FADE_SCALE_N_STAGGER, ITEM_FADE } from "@/lib/motion";

// import { LandingHeroData } from "@/lib/types";

// const landingHeroData: LandingHeroData = {
//   src: "/bg.avif",
//   title: "Patricia G. Penisten",
//   body: "December 22nd, 1935 - June 5th, 2025",
// };

// export default function LandingHero() {
//   return (
//     <>
//       <div className='absolute inset-0 z-10 min-h-screen w-full'>
//         <Image
//           src={landingHeroData.src}
//           alt="Background of Patricia Penisten's memorial page"
//           fill
//           priority
//           sizes='100vw'
//           className='object-cover'
//         />
//         <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90 dark:from-black/70 dark:via-black/80 dark:to-black/90' />
//       </div>

//       <motion.div
//         variants={CONTAINER_FADE_SCALE_N_STAGGER}
//         initial='hidden'
//         animate='visible'
//         className='grid min-h-screen grid-rows-[1fr_auto] px-4'
//       >
//         <div className='z-20 flex flex-col items-center justify-center gap-6'>
//           <motion.aside variants={ITEM_FADE}>
//             <PhotoFlip className='max-w-xs lg:max-w-lg' />
//           </motion.aside>

//           <motion.article variants={ITEM_FADE} className='text-center'>
//             <h1 className='text-accent-foreground mb-2 font-serif text-4xl font-bold tracking-tight sm:text-5xl xl:text-[3.25rem]'>
//               {landingHeroData.title}
//             </h1>

//             <h2 className='mb-6 font-normal text-white/90 sm:text-lg xl:text-[1.2rem] xl:leading-[1.45]'>
//               <time dateTime='1935-12-22'>December 22nd, 1935</time> -{" "}
//               <time dateTime='2025-06-05'>June 5th, 2025</time>
//             </h2>

//             <p className='mx-auto w-full max-w-64 text-xl leading-tight text-white sm:max-w-80 sm:text-2xl xl:max-w-96 xl:text-[1.85rem]'>
//               Beloved{" "}
//               <span className='text-primary font-semibold'>Teacher</span>,{" "}
//               <span className='text-primary font-semibold'>Mother</span>,{" "}
//               <span className='text-primary font-semibold'>Grandmother</span>, &{" "}
//               <span className='text-primary font-semibold'>Wife</span>.
//             </p>
//           </motion.article>
//         </div>

//         <motion.div variants={ITEM_FADE} className='z-20 mx-auto pb-8'>
//           <ScrollDown targetId='landing-about' />
//         </motion.div>
//       </motion.div>
//     </>
//   );
// }
