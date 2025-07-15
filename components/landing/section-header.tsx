interface SectionHeaderProps {
  header: string;
  subheader?: string | React.ReactNode;
}

export default function SectionHeader({
  header,
  subheader,
}: SectionHeaderProps) {
  return (
    <header className='mb-20 text-center'>
      <div className='mx-auto max-w-3xl space-y-2.5 md:space-y-1.5'>
        <h1 className='text-foreground mb-4 text-4xl font-bold lg:text-5xl'>
          {header}
        </h1>
        {subheader && (
          <h2 className='text-foreground/90 text-lg lg:text-xl'>{subheader}</h2>
        )}
      </div>
    </header>
  );
}
