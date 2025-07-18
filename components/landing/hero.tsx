import Image from "next/image";
import ScrollDownButton from "@/components/landing/scroll-down";

export default function Hero() {
  return (
    <section id='home' className='relative h-screen w-full overflow-hidden'>
      {/* Background image */}
      <div className='absolute inset-0 z-10 size-full'>
        <Image
          src='/backgrounds/bg-01.avif'
          alt='Patricia G Penisten Background'
          fill
          priority
          className='object-cover blur-sm brightness-[.3]'
        />
      </div>
      {/* Background overlay */}
      <div className='absolute inset-0 z-20 size-full bg-black/20 dark:bg-black/30' />

      {/* Middle section */}
      <div className='absolute inset-0 z-30 flex size-full pb-36 backdrop-blur-sm sm:pb-24 lg:pb-28'>
        <div className='5xl:max-w-7xl mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-7 px-4 lg:flex-row lg:gap-0'>
          <aside className='flex items-center justify-center lg:items-end lg:justify-end'>
            <figure className='5xl:size-116 4xl:size-108 size-60 overflow-hidden sm:size-68 lg:size-72 xl:size-84 2xl:size-96'>
              <Image
                src='/icons/6.png'
                alt='Patricia G Penisten Icon'
                height={500}
                width={500}
                className='size-full object-cover'
              />
              <figcaption>
                <p className='sr-only'>Patricia G Penisten Icon</p>
              </figcaption>
            </figure>
          </aside>
          <header className='flex flex-col items-center justify-center rounded-lg text-center lg:items-start lg:justify-start lg:text-start'>
            <h1 className='5xl:text-[4.8rem] 4xl:text-[4.6rem] mb-1 bg-gradient-to-bl from-yellow-50 via-red-300 to-rose-300 bg-clip-text font-serif text-4xl leading-none font-bold text-transparent text-shadow-lg sm:text-5xl lg:text-[3.20rem] lg:tracking-[-0.015em] xl:text-[4.1rem] 2xl:text-[4.5rem]'>
              Patricia G. Penisten
            </h1>
            <h2 className='5xl:text-[1.80rem] 4xl:text-[1.65rem] mb-8 font-light text-white/90 sm:text-lg lg:mb-5 lg:pl-1 lg:text-[1.2rem] lg:leading-snug lg:tracking-[-0.015em] xl:text-[1.45rem] 2xl:mb-6 2xl:text-[1.55rem]'>
              December 22nd, 1935 - June 5th, 2025
            </h2>
            <h3 className='5xl:text-[2.85rem] 4xl:text-[2.65rem] max-w-sm text-2xl text-white text-shadow-lg lg:pl-1 lg:text-[1.95rem] lg:leading-tight xl:max-w-xl xl:text-[2.35rem] xl:tracking-[0.015em] 2xl:text-[2.55rem]'>
              Beloved{" "}
              <span className='font-semibold text-yellow-100'>Teacher</span>,{" "}
              <span className='font-semibold text-yellow-100'>Mother</span>,{" "}
              <span className='font-semibold text-yellow-100'>Grandmother</span>
              , & <span className='font-semibold text-yellow-100'>Wife</span>.
            </h3>
          </header>
        </div>
      </div>

      {/* Bottom section */}
      <div className='absolute bottom-20 z-30 flex w-full justify-center sm:bottom-10'>
        <ScrollDownButton />
      </div>
    </section>
  );
}
