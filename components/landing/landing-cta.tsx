import Link from "next/link";
import Image from "next/image";
import * as motion from "motion/react-client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import { LandingCTAData } from "@/lib/types";

const landingCTAData: LandingCTAData = {
  button: "Check It Out",
  title: "Pat got out there for one final road trip!",
  body: `They're calling it "The Farewell Tour".`,
};

export default function LandingCTA() {
  return (
    <div className='mx-auto grid min-h-screen w-full place-items-center py-16 xl:py-24'>
      <div className='mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 xl:px-12'>
        <div className='lg:bg-card xs:px-4 mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-8 px-2 py-8 text-center lg:flex-row lg:gap-4 lg:rounded-lg lg:shadow-lg xl:max-w-[76rem] xl:gap-8 xl:px-12 xl:py-16 lg:dark:border'>
          {/* Image */}
          <motion.aside
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className='xs:px-4 flex px-2 md:px-4 lg:mx-auto'
          >
            <div className='relative'>
              <Image
                src='/landing/map.png'
                alt='Map'
                width={500}
                height={500}
                className='bg-foreground border-accent-foreground aspect-square rounded-lg border-2 object-cover shadow-lg lg:size-100'
              />
              <div className='bg-accent border-accent-foreground text-accent-foreground absolute -right-4 -bottom-4 -rotate-4 transform rounded-lg border-2 px-4 py-2 text-[0.9rem] leading-[1.4] font-semibold tracking-wide uppercase shadow-lg'>
                1935-2025
              </div>
            </div>
          </motion.aside>

          {/* Text */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className='xs:max-w-100 xs:px-4 flex w-full flex-1 flex-col gap-4 px-2 md:max-w-md md:px-4 md:pb-8 lg:max-w-none lg:text-start'
          >
            <h6 className='xs:text-[1.95rem] font-serif text-[1.65rem] leading-[1.2] font-black text-shadow-lg/10 sm:text-[2.5rem] md:text-[2.35rem] md:leading-[1.15] lg:text-[3.75rem] lg:leading-[1.05] xl:text-[4rem]'>
              {landingCTAData.title}
            </h6>

            <p className='text-foreground/90 xs:text-base mb-4 text-[0.925rem] leading-normal font-medium sm:text-[1.05rem] md:text-[1.2rem] lg:text-[1.2rem] xl:text-[1.25rem]'>
              {landingCTAData.body}
            </p>

            <Link href='/farewell'>
              <Button className='2xl:text[1.1rem] group h-9 cursor-pointer px-6 text-sm transition-all lg:h-10 lg:text-base xl:h-10.5 xl:text-[1.05rem]'>
                {landingCTAData.button}
                <ArrowRight className='size-4 transition-all duration-200 ease-in-out group-hover:translate-x-0.5 xl:size-4.5' />
              </Button>
            </Link>
          </motion.article>
        </div>
      </div>
    </div>
  );
}

// import Link from "next/link";
// import Image from "next/image";
// import * as motion from "motion/react-client";
// import { ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { CONTAINER_FADE_SCALE_N_STAGGER, ITEM_FADE } from "@/lib/motion";

// import { LandingCTAData } from "@/lib/types";

// const landingCTAData: LandingCTAData = {
//   button: "Check It Out",
//   title: "Pat got out there for one final road trip!",
//   body: `They're calling it "The Farewell Tour".`,
// };

// export default function LandingCTA() {
//   return (
//     <div className='mx-auto mb-24 grid min-h-screen w-full place-items-center pt-16 pb-24 xl:pt-32 xl:pb-28'>
//       <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8'>
//         <motion.div
//           variants={CONTAINER_FADE_SCALE_N_STAGGER}
//           initial='hidden'
//           whileInView='visible'
//           viewport={{ once: true, amount: 0.4 }}
//           className='lg:bg-card mx-auto flex flex-col items-center justify-center gap-8 px-4 py-8 text-center md:gap-10 lg:flex-row lg:rounded-lg lg:shadow-lg xl:max-w-none xl:px-12 xl:py-16 lg:dark:border'
//         >
//           <motion.aside
//             variants={ITEM_FADE}
//             className='xs:px-4 flex px-2 md:px-4 lg:mx-auto'
//           >
//             <div className='relative'>
//               <Image
//                 src='/landing/map.png'
//                 alt='Map'
//                 width={500}
//                 height={500}
//                 className='bg-foreground border-accent-foreground aspect-square rounded-lg border-2 object-cover shadow-lg'
//               />
//               <div className='bg-accent border-accent-foreground text-accent-foreground absolute -right-4 -bottom-4 -rotate-4 transform rounded-lg border-2 px-4 py-2 text-[0.9rem] leading-[1.4] font-semibold tracking-wide uppercase shadow-lg'>
//                 1935-2025
//               </div>
//             </div>
//           </motion.aside>
//           <motion.article
//             variants={ITEM_FADE}
//             className='xs:max-w-100 flex w-full flex-1 flex-col gap-4 md:max-w-md md:pb-8 lg:max-w-none lg:pb-4 lg:text-start 2xl:pb-8'
//           >
//             <h6 className='xs:text-[1.95rem] px-4 font-serif text-[1.65rem] leading-[1.2] font-black text-shadow-lg/10 sm:px-0 sm:text-[2.5rem] md:text-[2.35rem] md:leading-[1.15] lg:text-[2.75rem] lg:leading-[1.05] xl:text-[3.4rem] 2xl:text-[4.25rem]'>
//               {landingCTAData.title}
//             </h6>
//             <p className='text-foreground/90 xs:text-base mb-4 px-4 text-[0.925rem] leading-normal font-medium sm:px-0 sm:text-[1.05rem] md:text-[1.2rem] lg:ml-0.5 lg:text-lg xl:text-[1.25rem] 2xl:text-[1.3rem]'>
//               {landingCTAData.body}
//             </p>
//             <Link href='/farewell'>
//               <Button className='2xl:text[1.1rem] group h-9 cursor-pointer px-6 text-sm transition-all lg:h-10 lg:text-base xl:h-10.5 xl:text-[1.05rem]'>
//                 {landingCTAData.button}
//                 <ArrowRight className='size-4 transition-all duration-200 ease-in-out group-hover:translate-x-0.5 xl:size-4.5' />
//               </Button>
//             </Link>
//           </motion.article>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
