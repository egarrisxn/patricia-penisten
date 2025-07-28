import * as motion from "motion/react-client";

interface PageHeaderProps {
  title: string;
  heading: string;
  description: string;
}

export default function PageHeader({
  title,
  heading,
  description,
}: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "none" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <header className='4xl:pb-32 mx-auto max-w-screen-lg pb-20 text-center md:pb-24 2xl:pb-28'>
        <span className='text-primary text-xl font-bold uppercase'>
          {title}
        </span>
        <h3 className='mx-4 mt-8 font-serif text-2xl font-bold sm:text-3xl md:text-4xl lg:mx-0 lg:text-5xl lg:leading-10'>
          {heading}
        </h3>
        <p className='text-foreground/90 mx-auto mt-8 w-full max-w-3xl px-8 text-sm italic md:text-base'>
          {description}
        </p>
      </header>
    </motion.div>
  );
}

// "use client";

// import { motion } from "motion/react";

// interface PageHeaderProps {
//   title: string;
//   heading: string;
//   description: string;
// }

// export default function PageHeader({
//   title,
//   heading,
//   description,
// }: PageHeaderProps) {
//   return (
//     <div className='relative mx-auto my-10 flex max-w-4xl flex-col items-center justify-center px-4 text-center'>
//       {/* Title Tag */}
//       <motion.span
//         initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
//         animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//         transition={{ duration: 0.4 }}
//         className='text-primary text-lg font-bold tracking-wide uppercase'
//       >
//         {title}
//       </motion.span>

//       {/* Animated Heading */}
//       <h1 className='relative z-10 mt-6 flex flex-wrap justify-center font-serif text-2xl font-bold text-slate-800 sm:text-3xl md:text-4xl lg:text-5xl dark:text-slate-200'>
//         {heading.split(" ").map((word, index) => (
//           <motion.span
//             key={index}
//             initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
//             animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
//             transition={{
//               duration: 0.3,
//               delay: index * 0.08,
//               ease: "easeInOut",
//             }}
//             className='mr-2 inline-block'
//           >
//             {word}
//           </motion.span>
//         ))}
//       </h1>

//       {/* Description */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.4, delay: heading.split(" ").length * 0.08 }}
//         className='relative z-10 mt-6 max-w-2xl px-4 text-base text-neutral-600 italic md:text-lg dark:text-neutral-400'
//       >
//         {description}
//       </motion.p>
//     </div>
//   );
// }
