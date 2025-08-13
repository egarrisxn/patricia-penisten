interface ErrorProps {
  onClick: () => void;
}

export default function ErrorSection({ onClick }: ErrorProps) {
  return (
    <section className='grid min-h-screen w-full place-items-center'>
      <div className='flex flex-auto flex-col items-center justify-center px-4 text-center sm:flex-row'>
        <h1 className='sm:border-foreground text-5xl font-bold sm:mr-5 sm:border-r-2 sm:pr-5 sm:text-2xl'>
          Error
        </h1>
        <p className='text-accent-foreground/90 mt-3 text-lg sm:mt-0 sm:text-base'>
          Seems there is a problem.
        </p>
        <button
          onClick={onClick}
          className='text-primary mt-0.5 inline-flex h-8 shrink-0 items-center justify-center px-3 text-lg font-medium whitespace-nowrap underline-offset-4 transition-all hover:underline sm:mt-0 sm:pl-1.5 sm:text-base'
        >
          Try Again
        </button>
      </div>
    </section>
  );
}
