import * as motion from "motion/react-client";

interface SectionHeaderProps {
  title: string;
  heading: string;
  description: string;
}

const SectionHeader = ({ title, heading, description }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "none" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <header className='mx-auto max-w-3xl pb-8 text-center md:pb-14 2xl:pb-20'>
        <h1 className='text-[0.9rem] leading-normal font-bold tracking-[0.015em] text-primary uppercase xs:text-base md:text-xl'>
          {title}
        </h1>
        <h2 className='mt-5.5 px-4 font-serif text-[1.5rem] leading-[1.3] font-bold tracking-tight xs:text-[1.7rem] sm:text-[2rem] md:mt-8 md:text-4xl md:tracking-normal lg:text-5xl lg:leading-10'>
          {heading}
        </h2>

        <p className='mx-auto mt-7 mb-9 w-full max-w-sm px-4 text-[0.85rem] leading-normal font-medium text-foreground/80 italic xs:max-w-md xs:text-[0.925rem] sm:max-w-lg sm:text-[0.965rem] md:mt-8.5 md:max-w-xl md:text-lg lg:max-w-2xl'>
          {description}
        </p>

        <hr className='mx-auto h-0.5 w-1/3 bg-border' />
      </header>
    </motion.div>
  );
};

export default function Section({
  id,
  title,
  heading,
  description,
  className,
  children,
}: {
  id: string;
  title?: string;
  heading?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className='mx-auto grid min-h-screen w-full place-items-center pt-16 pb-12 xl:pt-28 xl:pb-20'
    >
      <div
        className={`${className} mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 xl:px-12`}
      >
        <SectionHeader
          title={title || ""}
          heading={heading || ""}
          description={description || ""}
        />
        {children}
      </div>
    </section>
  );
}
