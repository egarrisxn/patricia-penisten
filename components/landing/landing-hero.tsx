import Image from "next/image";
import * as motion from "motion/react-client";
import ScrollDownButton from "@/components/landing/scroll-down";
import { CONTAINER_VARIANT_SCALE, ITEM_VARIANT } from "@/lib/motion";

export default function LandingHero() {
  return (
    <>
      <motion.div
        className='absolute inset-0 z-10 size-full'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src='/bg/1.avif'
          alt='Beuatiful flower background'
          fill
          priority
          className='object-cover blur-sm brightness-[.3]'
        />
        {/* <Image
          src='/bg/2.avif'
          alt='Beuatiful flower background'
          fill
          priority
          className='object-cover blur-sm brightness-[.4]'
        /> */}
      </motion.div>

      <motion.div
        className='5xl:max-w-7xl absolute inset-0 z-30 mx-auto flex size-full max-w-6xl flex-col items-center justify-center gap-5 px-4 pt-8 pb-48 md:flex-row md:gap-4 md:pb-24 lg:pb-16'
        variants={CONTAINER_VARIANT_SCALE}
        initial='hidden'
        animate='visible'
      >
        <motion.aside
          variants={ITEM_VARIANT}
          className='flex w-fit items-center md:items-end'
        >
          <figure className='5xl:size-96 size-52 overflow-hidden rounded-full md:size-56 lg:size-72 xl:size-76 2xl:size-80'>
            <Image
              src='/logo.svg'
              alt='Patricia G Penisten Icon'
              height={500}
              width={500}
              quality={100}
              priority
              className='size-full object-cover'
            />
            <figcaption>
              <p className='sr-only'>Patricia G Penisten Icon</p>
            </figcaption>
          </figure>
        </motion.aside>
        <motion.header
          variants={ITEM_VARIANT}
          className='flex w-fit max-w-xs flex-col items-center text-center md:items-start md:text-start lg:max-w-none'
        >
          <h1 className='5xl:text-[4.8rem] 4xl:text-[4.6rem] mb-2.5 font-serif text-4xl leading-none font-bold tracking-tight text-red-300 text-shadow-black/50 text-shadow-lg md:mb-1.5 md:text-[2.3rem] lg:text-[3.15rem] xl:text-[3.9rem] xl:tracking-[-0.01em] 2xl:text-[4.4rem]'>
            Patricia G. Penisten
          </h1>
          <h2 className='5xl:text-[1.80rem] 4xl:text-[1.65rem] mb-10 text-[0.9rem] leading-none tracking-tight text-white md:mb-5 md:ml-0.5 md:text-[0.95rem] lg:mb-6 lg:text-[1.25rem] xl:mb-7 xl:text-[1.5rem] xl:tracking-[-0.01em] 2xl:text-[1.65rem]'>
            December 22nd, 1935 - June 5th, 2025
          </h2>
          <h3 className='5xl:text-[2.85rem] 4xl:text-[2.65rem] leading max-w-sm text-2xl tracking-tight text-white md:ml-0.5 md:text-[1.55rem] md:leading-tight lg:text-[2rem] xl:max-w-xl xl:text-[2.4rem] xl:tracking-[0.015em] 2xl:text-[2.7rem]'>
            Beloved{" "}
            <span className='font-semibold text-yellow-200 text-shadow-black/50 text-shadow-lg'>
              Teacher
            </span>
            ,{" "}
            <span className='font-semibold text-yellow-200 text-shadow-black/50 text-shadow-lg'>
              Mother
            </span>
            ,{" "}
            <span className='font-semibold text-yellow-200 text-shadow-black/50 text-shadow-lg'>
              Grandmother
            </span>
            , &{" "}
            <span className='font-semibold text-yellow-200 text-shadow-black/50 text-shadow-lg'>
              Wife
            </span>
            .
          </h3>
        </motion.header>
      </motion.div>

      <motion.div
        className='absolute bottom-30 z-30 flex w-full justify-center md:bottom-2.5 lg:bottom-10'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.4 }}
      >
        <ScrollDownButton />
      </motion.div>
    </>
  );
}

//! VERTICAL

// import Image from "next/image";
// import * as motion from "motion/react-client";
// import ScrollDownButton from "@/components/landing/scroll-down";
// import { CONTAINER_VARIANT_SCALE, ITEM_VARIANT } from "@/lib/motion";

// export default function LandingHero() {
//   return (
//     <>
//       <motion.div
//         className='absolute inset-0 z-10 size-full'
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5 }}
//       >
//         <Image
//           src='/bg/1.avif'
//           alt='Beuatiful flower background'
//           fill
//           priority
//           className='object-cover blur-sm brightness-[.3]'
//         />
//         {/* <Image
//           src='/bg/2.avif'
//           alt='Beuatiful flower background'
//           fill
//           priority
//           className='object-cover blur-sm brightness-[.4]'
//         /> */}
//       </motion.div>
//       <motion.div
//         className='5xl:max-w-7xl absolute inset-0 z-30 mx-auto flex size-full max-w-6xl flex-col items-center justify-center gap-5 px-4 pt-8 pb-48 md:flex-row md:gap-4 md:pb-24 lg:flex-col lg:gap-6'
//         variants={CONTAINER_VARIANT_SCALE}
//         initial='hidden'
//         animate='visible'
//       >
//         <motion.aside
//           variants={ITEM_VARIANT}
//           className='flex w-fit items-center md:items-end lg:items-center'
//         >
//           <figure className='5xl:size-96 size-52 overflow-hidden rounded-full lg:size-60 xl:size-68 2xl:size-76'>
//             <Image
//               src='/logo.svg'
//               alt='Patricia G Penisten Icon'
//               height={500}
//               width={500}
//               quality={100}
//               priority
//               className='size-full object-cover'
//             />
//             <figcaption>
//               <p className='sr-only'>Patricia G Penisten Icon</p>
//             </figcaption>
//           </figure>
//         </motion.aside>
//         <motion.header
//           variants={ITEM_VARIANT}
//           className='flex w-fit max-w-xs flex-col items-center text-center md:items-start md:text-start lg:max-w-none lg:items-center lg:text-center'
//         >
//           <h1 className='5xl:text-[4.8rem] 4xl:text-[4.6rem] 5xl:tracking-[-0.01em] mb-2 font-serif text-4xl leading-none font-bold tracking-tight text-red-300 text-shadow-black/50 text-shadow-lg lg:text-[3.2rem] xl:text-[3.6rem] xl:tracking-[-0.015em]'>
//             Patricia G. Penisten
//           </h1>
//           <h2 className='5xl:text-[1.80rem] 4xl:text-[1.65rem] 5xl:tracking-[-0.01em] mb-10 text-[0.9rem] leading-none tracking-tight text-white md:mb-6 lg:mb-10 lg:text-[1.2rem] xl:text-[1.4rem] xl:tracking-[-0.015em]'>
//             December 22nd, 1935 - June 5th, 2025
//           </h2>
//           <h3 className='5xl:text-[2.85rem] 4xl:text-[2.65rem] max-w-sm text-2xl tracking-tight text-white md:leading-tight lg:text-[1.95rem] xl:max-w-xl xl:text-[2.4rem] xl:tracking-[0.015em]'>
//             Beloved{" "}
//             <span className='font-semibold text-yellow-200 text-shadow-black/50 text-shadow-lg'>
//               Teacher
//             </span>
//             ,{" "}
//             <span className='font-semibold text-yellow-200 text-shadow-black/50 text-shadow-lg'>
//               Mother
//             </span>
//             ,{" "}
//             <span className='font-semibold text-yellow-200 text-shadow-black/50 text-shadow-lg'>
//               Grandmother
//             </span>
//             , &{" "}
//             <span className='font-semibold text-yellow-200 text-shadow-black/50 text-shadow-lg'>
//               Wife
//             </span>
//             .
//           </h3>
//         </motion.header>
//       </motion.div>

//       <motion.div
//         className='absolute bottom-30 z-30 flex w-full justify-center md:bottom-2.5 lg:bottom-20'
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.5, delay: 0.4 }}
//       >
//         <ScrollDownButton />
//       </motion.div>
//     </>
//   );
// }
