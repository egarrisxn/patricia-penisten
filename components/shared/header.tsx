import * as motion from "motion/react-client";

interface HeaderProps {
  title: string;
  heading: string;
  description: string;
}

export default function Header({ title, heading, description }: HeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "none" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <header className='4xl:pb-24 mx-auto max-w-3xl pb-12 text-center md:pb-16 2xl:pb-20'>
        <h1 className='text-primary text-base font-bold tracking-[0.015em] uppercase md:text-xl'>
          {title}
        </h1>
        <h2 className='xs:text-[1.7rem] mt-5.5 px-4 font-serif text-[1.55rem] leading-[1.3] font-bold tracking-tight sm:text-[2rem] md:mt-8 md:text-4xl md:tracking-normal lg:text-5xl lg:leading-10'>
          {heading}
        </h2>
        <div className='text-foreground/80 xs:max-w-md mx-auto mt-7 w-full max-w-sm space-y-10 px-4 sm:max-w-lg md:mt-8.5 md:max-w-xl lg:max-w-2xl'>
          <p className='xs:text-[0.925rem] text-sm font-medium italic sm:text-[0.965rem] md:text-lg'>
            {description}
          </p>
          <hr className='mx-auto w-1/2' />
        </div>
      </header>
    </motion.div>
  );
}
