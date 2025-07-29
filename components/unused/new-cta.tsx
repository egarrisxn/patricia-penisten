// import Link from "next/link";
// import Image from "next/image";
// import * as motion from "motion/react-client";
// import { Button } from "@/components/ui/button";
// import { CONTAINER_VARIANT_SCALE, ITEM_VARIANT } from "@/lib/motion";

// export default function NewCTA() {
//   return (
//     <motion.div
//       variants={CONTAINER_VARIANT_SCALE}
//       initial='hidden'
//       whileInView='visible'
//     >
//       <div className='mx-auto flex flex-col items-center justify-center gap-8 px-4 pt-20 pb-20 text-center md:flex-row md:gap-10 md:pt-32 md:pb-32 2xl:px-8'>
//         <motion.aside variants={ITEM_VARIANT}>
//           <div className='4xl:max-w-125 flex w-full max-w-80 border-red-500 px-4 md:px-0 lg:max-w-110 lg:min-w-96'>
//             <div className='relative'>
//               <Image
//                 src='/placeholder.svg'
//                 alt='placeholder'
//                 width={500}
//                 height={500}
//                 className='border-foreground aspect-square rounded-2xl border-2 object-cover md:border-4'
//               />
//               <div className='bg-foreground text-background absolute -top-4 -left-4 -rotate-3 transform rounded-lg px-4 py-2 text-sm font-bold uppercase'>
//                 1935-2025
//               </div>
//             </div>
//           </div>
//         </motion.aside>

//         <motion.article variants={ITEM_VARIANT}>
//           <div className='flex w-full max-w-100 flex-1 flex-col gap-4 px-6 md:max-w-xl md:px-0 md:pb-8 md:text-start 2xl:max-w-none'>
//             <h6 className='px-2 font-serif text-[1.95rem] leading-[1.2] font-black text-shadow-lg/10 sm:px-0 sm:text-[2.5rem] md:text-4xl lg:text-5xl xl:text-6xl'>
//               She did get the chance to go out for one final road trip..
//             </h6>
//             <p className='text-foreground/90 mb-4 text-sm italic md:mb-8 md:ml-0.5 md:text-base lg:text-lg xl:text-xl'>
//               Go ahead and see for yourself!
//             </p>
//             <Link href='/farewell'>
//               <Button className='h-10 cursor-pointer bg-gradient-to-r from-purple-500/90 to-rose-500/90 px-6 text-sm text-white transition-all hover:from-purple-500 hover:to-rose-500 sm:h-11 sm:text-base md:h-12 md:text-lg lg:h-13 lg:text-xl xl:h-14'>
//                 The Farewell Tour
//               </Button>
//             </Link>
//           </div>
//         </motion.article>
//       </div>
//     </motion.div>
//   );
// }
