import * as motion from "motion/react-client";

interface LandingHeaderProps {
  header: string;
  subheader?: string | React.ReactNode;
}

export default function LandingHeader({
  header,
  subheader,
}: LandingHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "none" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className='5xl:mb-32 mb-20 text-center md:mb-24'
    >
      <header className='mx-auto max-w-3xl'>
        <h1 className='text-accent-foreground/90 text-shadow-accent-foreground/10 xs:text-5xl mb-2 text-4xl font-bold tracking-tight text-shadow-md lg:text-[4.5rem]'>
          {header}
        </h1>
        {subheader && (
          <h2 className='text-accent-foreground/90 xs:text-base xs:font-light text-[0.9rem] tracking-tight lg:text-[1.35rem]'>
            {subheader}
          </h2>
        )}
      </header>
    </motion.div>
  );
}
