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
      <header className='4xl:pb-24 mx-auto max-w-screen-lg pb-12 text-center md:pb-16 2xl:pb-20'>
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
