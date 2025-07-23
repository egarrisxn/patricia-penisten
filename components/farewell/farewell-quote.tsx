const farewellQuoteText = [
  "A life beautifully lived, and a legacy of love that will forever remain in our hearts.",
];

export default function FarewellQuote() {
  return (
    <div className='w-full px-8 md:mx-auto md:max-w-xs md:pt-2.5'>
      <p className='text-accent-foreground/90 xs:text-[1.25rem] max-w-xl text-[1.15rem] leading-relaxed italic sm:text-[1.35rem] md:mx-auto md:text-center md:text-[1.4rem] md:leading-snug xl:text-[1.45rem]'>
        <q>{farewellQuoteText}</q>
      </p>
    </div>
  );
}
