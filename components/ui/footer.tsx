import { Heart } from "lucide-react";

interface FooterProps {
  children?: React.ReactNode;
  className?: string;
  showCredit?: boolean;
  isMemorial?: boolean;
}

const DeveloperCredit = () => (
  <div className='group flex items-center justify-center space-x-1 text-sm font-semibold tracking-tight text-black sm:text-base dark:text-white'>
    <span>Made with</span>
    <Heart
      size={16}
      className='fill-primary/50 text-primary group-hover:fill-primary/80'
    />
    <span>by</span>
    <a
      href='https://egxo.dev'
      target='_blank'
      rel='noopener noreferrer'
      className='relative cursor-pointer transition-colors group-hover:text-primary'
    >
      egxo.dev
      <span className='absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full'></span>
    </a>
  </div>
);

export default function Footer({
  children,
  className = "mx-auto flex w-full items-center justify-center p-4",
  showCredit = false,
  isMemorial = false,
}: FooterProps) {
  return (
    <footer className={className}>
      {isMemorial ? (
        <div className='mx-auto px-4 pt-18 pb-14 text-center md:pt-20 md:pb-16'>
          <div className='mb-6 lg:mb-8'>
            <h3 className='mb-2 text-lg font-bold tracking-tight xs:text-xl sm:text-2xl'>
              In Loving Memory of Patricia G. Penisten
            </h3>
            <p className='text-sm font-medium tracking-tight text-foreground/90 sm:text-base'>
              December 22nd, 1935 - June 5th, 2025
            </p>
          </div>
          <DeveloperCredit />
        </div>
      ) : (
        <div className='mx-auto flex w-full items-center justify-center p-4'>
          {children}
          {showCredit && <DeveloperCredit />}
        </div>
      )}
    </footer>
  );
}
