interface SectionHeaderProps {
  header: string;
  subheader?: string | React.ReactNode;
}

export default function SectionHeader({
  header,
  subheader,
}: SectionHeaderProps) {
  return (
    <header className='5xl:mb-32 mb-20 text-center lg:mb-24'>
      <div className='5xl:space-y-2.5 mx-auto max-w-3xl'>
        <h1 className='text-foreground text-shadow-foreground/10 5xl:text-[5rem] mb-2.5 text-[2.5rem] leading-[1.1] font-bold text-shadow-md lg:mb-3.5 lg:text-[4.25rem] lg:leading-none'>
          {header}
        </h1>
        {subheader && (
          <h2 className='text-foreground/90 5xl:text-[1.75rem] text-base tracking-tight lg:text-[1.5rem]'>
            {subheader}
          </h2>
        )}
      </div>
    </header>
  );
}
