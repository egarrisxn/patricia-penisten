// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "motion/react";
// import { ArrowLeft, ArrowRight, Clock } from "lucide-react";

// type Testimonial = {
//   quote: string;
//   name: string;
//   designation: string;
//   src: string;
//   raw?: any;
// };

// export const AnimatedTestimonials = ({
//   testimonials,
//   autoplay = false,
//   interval = 5000,
//   onImageClick,
// }: {
//   testimonials: Testimonial[];
//   autoplay?: boolean;
//   interval?: number;
//   onImageClick?: (testimonial: Testimonial) => void;
// }) => {
//   const [active, setActive] = useState(0);

//   const handleNext = () => {
//     setActive((prev) => (prev + 1) % testimonials.length);
//   };

//   const handlePrev = () => {
//     setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const isActive = (index: number) => index === active;

//   useEffect(() => {
//     if (autoplay) {
//       const timer = setInterval(handleNext, interval);
//       return () => clearInterval(timer);
//     }
//   }, [autoplay, interval]);

//   const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

//   return (
//     <div className='relative mx-auto grid max-w-sm grid-cols-1 gap-20 rounded-xl border-2 px-4 py-20 md:max-w-6xl md:px-8 lg:px-12'>
//       {/* IMAGE SIDE */}
//       <div>
//         <div className='relative mx-auto h-80 w-full max-w-80'>
//           <AnimatePresence>
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={testimonial.src + index}
//                 initial={{
//                   opacity: 0,
//                   scale: 0.9,
//                   z: -100,
//                   rotate: randomRotateY(),
//                 }}
//                 animate={{
//                   opacity: isActive(index) ? 1 : 0.7,
//                   scale: isActive(index) ? 1 : 0.95,
//                   z: isActive(index) ? 0 : -100,
//                   rotate: isActive(index) ? 0 : randomRotateY(),
//                   zIndex: isActive(index)
//                     ? 40
//                     : testimonials.length + 2 - index,
//                   y: isActive(index) ? [0, -80, 0] : 0,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   scale: 0.9,
//                   z: 100,
//                   rotate: randomRotateY(),
//                 }}
//                 transition={{ duration: 0.4, ease: "easeInOut" }}
//                 className='absolute top-0 left-0 h-full w-full origin-bottom overflow-hidden'
//               >
//                 <div
//                   className='relative h-full w-full cursor-pointer'
//                   onClick={() =>
//                     onImageClick?.(testimonials[index] || testimonial)
//                   }
//                 >
//                   <div className='relative aspect-[3/2] h-full w-full'>
//                     <Image
//                       src={testimonial.src}
//                       alt={testimonial.name}
//                       fill
//                       className='rounded-3xl object-cover object-center'
//                       sizes='(max-width: 768px) 100vw, 50vw'
//                     />
//                     {testimonial.designation
//                       .toLowerCase()
//                       .includes("pending") && (
//                       <div className='absolute top-2 left-2 rounded-full bg-amber-400 px-2 py-1 text-xs text-black'>
//                         <Clock className='mr-1 inline size-3' />
//                         Pending
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* TEXT SIDE */}
//       <div className='flex flex-col justify-between py-4'>
//         <motion.div
//           key={active}
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: -20, opacity: 0 }}
//           transition={{ duration: 0.2, ease: "easeInOut" }}
//         >
//           <h3 className='truncate text-2xl font-bold text-black dark:text-white'>
//             {testimonials[active].name}
//           </h3>
//           <p className='text-sm text-gray-500 dark:text-neutral-500'>
//             {testimonials[active].designation}
//           </p>
//           <motion.p className='mt-6 w-96 truncate text-lg text-gray-500 dark:text-neutral-300'>
//             {testimonials[active].quote.split(" ").map((word, index) => (
//               <motion.span
//                 key={index}
//                 initial={{
//                   filter: "blur(10px)",
//                   opacity: 0,
//                   y: 5,
//                 }}
//                 animate={{
//                   filter: "blur(0px)",
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   duration: 0.2,
//                   ease: "easeInOut",
//                   delay: 0.02 * index,
//                 }}
//                 className='inline-block'
//               >
//                 {word}&nbsp;
//               </motion.span>
//             ))}
//           </motion.p>
//         </motion.div>

//         {/* Controls */}
//         <div className='flex gap-4 pt-12 md:pt-4'>
//           <button
//             onClick={handlePrev}
//             className='group/button flex size-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800'
//           >
//             <ArrowLeft className='h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400' />
//           </button>
//           <button
//             onClick={handleNext}
//             className='group/button flex size-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800'
//           >
//             <ArrowRight className='h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400' />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
