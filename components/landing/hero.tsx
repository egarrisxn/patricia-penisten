import Image from "next/image";
import ScrollDownButton from "@/components/landing/scroll-down";

export default function Hero() {
  return (
    <section id='home' className='relative h-screen w-full overflow-hidden'>
      {/* Background image */}
      <div className='absolute inset-0 z-10 size-full'>
        <Image
          src='/backgrounds/bg-00.avif'
          alt='Patricia G Penisten Background'
          fill
          priority
          className='object-cover blur-sm brightness-[.4] grayscale'
        />
      </div>
      {/* Background overlay */}
      <div className='absolute inset-0 z-20 size-full bg-black/20' />

      {/* Middle section */}
      <div className='absolute inset-0 z-30 flex size-full pb-36 sm:pb-24 lg:pb-28'>
        <div className='mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-7 px-4 lg:flex-row lg:gap-4 2xl:gap-6'>
          <aside className='flex items-center justify-center lg:items-end lg:justify-end'>
            <figure className='size-52 overflow-hidden sm:size-68 lg:size-60 xl:size-76 2xl:size-80'>
              <Image
                src='/icons/8.png'
                alt='Patricia G Penisten Icon'
                height={400}
                width={400}
                className='size-full object-cover'
              />
              <figcaption>
                <p className='sr-only'>Patricia G Penisten Icon</p>
              </figcaption>
            </figure>
          </aside>
          <header className='flex flex-col items-center justify-center text-center lg:items-start lg:justify-start lg:text-start'>
            <h1 className='mb-1 bg-gradient-to-bl from-yellow-50 via-red-300 to-rose-300 bg-clip-text font-serif text-4xl font-bold text-transparent text-shadow-lg sm:text-5xl lg:mb-2 lg:text-6xl xl:mb-3 xl:text-[4.30rem] xl:tracking-[-0.015em] 2xl:text-7xl'>
              Patricia G. Penisten
            </h1>
            <h2 className='mb-8 text-white/80 sm:text-lg lg:mb-4.5 lg:pl-1 lg:text-xl xl:text-[1.45rem] xl:tracking-[-0.015em] 2xl:mb-5.5 2xl:text-[1.65rem]'>
              December 22nd, 1935 - June 5th, 2025
            </h2>
            <h3 className='xltracking-[0.015em] max-w-sm text-2xl text-white text-shadow-lg lg:max-w-none lg:pl-1 lg:text-3xl xl:max-w-xl xl:text-[2.35rem] 2xl:text-[2.5rem]'>
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
      <div className='absolute bottom-10 z-30 flex w-full justify-center'>
        <ScrollDownButton />
      </div>
    </section>
  );
}
